import { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Edit, Trash, ArrowLeft } from 'iconsax-react-native';
import { colors } from '../../../../assets/theme';
import { PageWrapper } from '../../../components';
import axios from 'axios';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

export default function DetailNews() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute();
    const { newsId } = route.params;

    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        fetchNewsDetail();
    }, [newsId]);

    const fetchNewsDetail = async () => {
        try {
            const response = await axios.get(`https://681af97e17018fe50579516b.mockapi.io/api/News/${newsId}`);
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
            Alert.alert('Error', 'Failed to load news details');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = () => {
        Alert.alert(
            'Delete News',
            'Are you sure you want to delete this news?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: confirmDelete,
                    style: 'destructive',
                },
            ]
        );
    };

    const confirmDelete = async () => {
        setDeleting(true);
        try {
            await axios.delete(`https://681af97e17018fe50579516b.mockapi.io/api/News/${newsId}`);
            Alert.alert('Success', 'News deleted successfully');
            navigation.goBack();
        } catch (error) {
            console.error('Error deleting news:', error);
            Alert.alert('Error', 'Failed to delete news');
        } finally {
            setDeleting(false);
        }
    };

    const handleEdit = () => {
        navigation.navigate('EditNews', { newsId : newsId, onGoBack: () => {
            fetchNewsDetail();
        } });
    };

    if (loading) {
        return (
            <PageWrapper>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            </PageWrapper>
        );
    }

    if (!news) {
        return (
            <PageWrapper>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>News not found</Text>
                </View>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            {/* Fixed Header */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft color={colors.textPrimary} size={24} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: colors.textPrimary }}>News Detail</Text>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={handleEdit}
                        disabled={deleting}
                    >
                        <Edit color={colors.textPrimary} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={handleDelete}
                        disabled={deleting}
                    >
                        {deleting ? (
                            <ActivityIndicator size="small" color={colors.danger} />
                        ) : (
                            <Trash color={colors.danger} size={24} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                {/* News Image */}
                <Image
                    source={{ uri: news.img }}
                    style={styles.newsImage}
                    resizeMode="cover"
                />

                {/* News Content */}
                <View style={styles.contentContainer}>
                    {/* News Title */}
                    <Text style={styles.newsTitle}>{news.title}</Text>

                    {/* News Description */}
                    <Text style={styles.newsDescription}>{news.description}</Text>

                    
                    {/* Date (if available) */}
                    {news.createdAt && (
                        <Text style={styles.newsDate}>
                            Published at: {new Date(news.createdAt).toLocaleDateString()}
                        </Text>
                    )}
                </View>
            </ScrollView>
        </PageWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        paddingBottom: 20, // Add some padding at the bottom
    },
    header: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    actionButtons: {
        flexDirection: 'row',
        gap: 16,
    },
    editButton: {
        padding: 8,
    },
    deleteButton: {
        padding: 8,
    },
    newsImage: {
        width: '100%',
        height: 250,
        marginTop: 60, // Match header height
    },
    contentContainer: {
        padding: 16,
    },
    newsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: 16,
    },
    newsDescription: {
        fontSize: 16,
        color: colors.textSecondary,
        lineHeight: 24,
        marginBottom: 16,
    },
    newsDate: {
        fontSize: 14,
        textAlign: 'right',
        color: colors.textSecondary,
        fontStyle: 'italic',
        marginBottom: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: colors.danger,
    },
});