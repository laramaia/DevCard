import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from '../styles/constants';
import { Button } from '../components/Buttons';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.logo}>DevCard</Text>
                    <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
                </View>

                <Button variant="primary" label="Criar meu cartão" />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 750,
    },
    logo: {
        color: THEME.colors.primary,
        fontWeight: "bold",
        fontSize: 56,
    },
    subtitle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: 16,
    },
})