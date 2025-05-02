import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ArrowLeft, Gallery, CloseSquare } from 'iconsax-react-native';
import { colors } from '../../../../assets/theme';
import { TRadius } from '../../../../assets/TStyle';
import { PageWrapper } from '../../../components';

export default function CreateNews({ navigation }) {
    // const navigation = useNavigation();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            handleChange('image', result.assets[0].uri);
        }
    };

    const removeImage = () => {
        handleChange('image', null);
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.description) {
            Alert.alert('Error', 'Judul dan deskripsi harus diisi');
            return;
        }

        setIsLoading(true);

        // Simulasi proses submit
        setTimeout(() => {
            console.log('Data submitted:', formData);
            setIsLoading(false);
            Alert.alert('Success', 'Berita berhasil dibuat');
            navigation.goBack();
        }, 1500);
    };

    return (
        <PageWrapper>
            <View style={styles.container}>
                {/* Header */}
                {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color={colors.textPrimary} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Create News</Text>
                <View style={{ width: 24 }} />
            </View> */}

                <ScrollView contentContainerStyle={styles.formContainer}>
                    {/* Judul Input */}
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

                    {/* Deskripsi Input */}
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

                    {/* Gambar Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Image</Text>

                        {formData.image ? (
                            <View style={styles.imagePreviewContainer}>
                                <Image
                                    source={{ uri: formData.image }}
                                    style={styles.imagePreview}
                                />
                                <TouchableOpacity
                                    style={styles.removeImageButton}
                                    onPress={removeImage}
                                >
                                    <CloseSquare color="white" size={20} variant="Bold" />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={styles.imagePicker}
                                onPress={pickImage}
                            >
                                <Gallery color={colors.primary} size={32} />
                                <Text style={styles.imagePickerText}>Pilih Gambar</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit}
                        disabled={isLoading}
                    >
                        <Text style={styles.submitButtonText}>
                            {isLoading ? 'Saving...' : 'Publish News'}
                        </Text>
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
        color: colors.textPrimary,
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
    removeImageButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: colors.danger,
        borderRadius: 20,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        backgroundColor: colors.primary,
        borderRadius: TRadius.sm,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: colors.textPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
});