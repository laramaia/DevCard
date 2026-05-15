import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from '../styles/constants';
import { Button } from '../components/Buttons';

export default function SucessoScreen(){
    return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>

                        <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
                    </View>
    
                    <Button variant="primary" label="Criar outro cartão" />
                    <Button variant="secondary" label="Voltar ao início" />

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
    subtitle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: THEME.text.heading.h2,
    },
    footerContainer: {
        flexDirection: "column",
        gap: 12
    }
})