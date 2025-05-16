import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
    ActivityIndicator
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ArrowLeft, Gallery, CloseSquare } from 'iconsax-react-native';
import { colors } from '../../../../assets/theme';
import { TRadius } from '../../../../assets/TStyle';
import { PageWrapper } from '../../../components';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export default function EditNews({ navigation }) {
    const route = useRoute();
    const { newsId } = route.params;

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        img: null
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchNewsDetail();
    }, [newsId]);

    const fetchNewsDetail = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://681af97e17018fe50579516b.mockapi.io/api/News/${newsId}`);
            setFormData({
                title: response.data.title,
                description: response.data.description,
                img: response.data.img
            });
        } catch (error) {
            console.error('Error fetching news:', error);
            Alert.alert('Error', 'Failed to load news details');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'We need gallery permission to pick images');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaType.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.8,
        });

        if (!result.canceled) {
            handleChange('img', result.assets[0].uri);
        }
    };

    const removeImage = () => {
        handleChange('img', null);
    };

    const handleSubmit = async () => {
        if (!formData.title || !formData.description) {
            Alert.alert('Error', 'Title and description are required');
            return;
        }

        setIsSubmitting(true);

        try {
            const newsData = {
                title: formData.title,
                description: formData.description,
                img: formData.img
            };

            await axios.put(
                `https://681af97e17018fe50579516b.mockapi.io/api/News/${newsId}`,
                newsData
            );

            Alert.alert('Success', 'News updated successfully');
            navigation.goBack();
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Failed to update news');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <PageWrapper>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <View style={styles.container}>

                <ScrollView contentContainerStyle={styles.formContainer}>
                    {/* Title Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter news title..."
                            value={formData.title}
                            onChangeText={(text) => handleChange('title', text)}
                            placeholderTextColor={colors.textSecondary}
                        />
                    </View>

                    {/* Description Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Write your news description..."
                            value={formData.description}
                            onChangeText={(text) => handleChange('description', text)}
                            multiline
                            numberOfLines={4}
                            placeholderTextColor={colors.textSecondary}
                        />
                    </View>

                    {/* Image Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Image</Text>
                        <TextInput
                            style={[styles.input]}
                            placeholder="Put image url"
                            value={formData.img}
                            onChangeText={(text) => handleChange('img', text)}
                            placeholderTextColor={colors.textSecondary}
                        />
                        {/* {formData.img ? (
                            <View style={styles.imagePreviewContainer}>
                                <Image
                                    source={{ uri: formData.img }}
                                    style={styles.imagePreview}
                                />
                                <View style={styles.imageActions}>
                                    <TouchableOpacity
                                        style={styles.changeImageButton}
                                        onPress={pickImage}
                                    >
                                        <Text style={styles.imageActionText}>Change</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.removeImageButton}
                                        onPress={removeImage}
                                    >
                                        <Text style={styles.imageActionText}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={styles.imagePicker}
                                onPress={pickImage}
                            >
                                <Gallery color={colors.primary} size={32} />
                                <Text style={styles.imagePickerText}>Select Image</Text>
                            </TouchableOpacity>
                        )} */}
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
                        onPress={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <ActivityIndicator color={colors.textPrimary} />
                        ) : (
                            <Text style={styles.submitButtonText}>Update News</Text>
                        )}
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </PageWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    formContainer: {
        padding: 16,
        paddingBottom: 32,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        color: colors.textSecondary,
        fontWeight: '500',
    },
    input: {
        backgroundColor: colors.base,
        borderRadius: TRadius.sm,
        padding: 12,
        color: colors.textSecondary,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    imagePicker: {
        backgroundColor: colors.base,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: TRadius.sm,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePickerText: {
        marginTop: 8,
        color: colors.primary,
        fontWeight: '500',
    },
    imagePreviewContainer: {
        position: 'relative',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        borderRadius: TRadius.sm,
    },
    imageActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    changeImageButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: TRadius.sm,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    removeImageButton: {
        backgroundColor: colors.danger,
        padding: 10,
        borderRadius: TRadius.sm,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    imageActionText: {
        color: colors.textPrimary,
        fontWeight: '500',
    },
    submitButton: {
        backgroundColor: colors.primary,
        borderRadius: TRadius.sm,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonDisabled: {
        opacity: 0.7,
    },
    submitButtonText: {
        color: colors.textPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});