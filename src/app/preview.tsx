import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { THEME } from "../styles/constants";
import { useCard } from "../app/context/CardContext";

import { Button } from "../components/Button";
import { Card } from "../components/Card";

export default function Preview() {

    const { cardData } = useCard();

    const {
        name,
        role,
        company,
        specialty,
        experience,
        color
    } = cardData;

    const temDados =
        name &&
        role &&
        specialty &&
        experience;

    if (!temDados) {
        return (
            <View style={styles.container}>
                <View style={styles.aviso}>

                    <Text style={styles.tituloAviso}>
                        Nenhum cartão criado ainda
                    </Text>

                    <Text style={styles.textoAviso}>
                        Preencha o cadastro primeiro para gerar
                        o seu cartão de visita digital.
                    </Text>

                    <Pressable
                        style={styles.botaoFinalizar}
                        onPress={() => router.replace("/")}
                    >
                        <Text style={styles.textoFinalizar}>
                            Começar agora
                        </Text>
                    </Pressable>

                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.title}>
                    Seu Cartão
                </Text>
            </View>

            <Card
                name={name}
                role={role}
                company={company}
                specialty={specialty}
                experience={experience}
                color={color}
            />

            <View style={styles.acoes}>

                <Button
                    label="Editar"
                    variant="outline"
                    onPress={() => router.back()}
                />

                <Button
                    label="Finalizar"
                    onPress={() => router.push("/sucesso")}
                />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 24,
        paddingTop: 24,
    },

    aviso: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },

    tituloAviso: {
        fontSize: 26,
        fontWeight: "bold",
        color: THEME.colors.primary,
        textAlign: "center",
    },

    textoAviso: {
        fontSize: 16,
        color: THEME.colors.subtitle,
        textAlign: "center",
        lineHeight: 24,
    },

    headerContainer: {
        marginBottom: 24,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: THEME.colors.primary,
    },

    acoes: {
        marginTop: 32,
        gap: 14,
    },

    botaoFinalizar: {
        height: 52,
        borderRadius: THEME.border.radius.md,
        backgroundColor: THEME.colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },

    textoFinalizar: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
    },
});