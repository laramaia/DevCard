import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/constants";
import { Button } from "../components/Button";
import { useCard } from "../app/context/CardContext";

export default function SucessoScreen(){

    const { cardData } = useCard();

    const {
        name,
        role,
        specialty,
        experience,
    } = cardData;

    const temDados =
        name &&
        role &&
        specialty &&
        experience;

    if (!temDados) {
        router.replace("/");
        return null;
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <Text style={styles.subtitle}>
                        Cartão Dev criado com sucesso
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <Button
                        variant="primary"
                        label="Criar outro cartão"
                        onPress={() => router.replace("/")}
                    />

                    <Button
                        variant="secondary"
                        label="Voltar ao início"
                        onPress={() => router.replace("/")}
                    />
                </View>

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