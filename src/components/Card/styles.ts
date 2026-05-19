import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 24,
        padding: 28,
        alignItems: "center",
        overflow: "hidden",
        minHeight: 360,
        justifyContent: "center",
    },

    brilhoMaior: {
        position: "absolute",
        width: 140,
        height: 140,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.12)",
        top: -30,
        right: -40,
    },

    brilhoMenor: {
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.10)",
        top: 20,
        right: 20,
    },

    cardAvatarContainer: {
        width: 84,
        height: 84,
        borderRadius: 999,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 18,
    },

    cardAvatarLetter: {
        fontSize: 34,
        fontWeight: "bold",
        color: THEME.colors.primary,
    },

    cardTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#ffffff",
    },

    cardText: {
        marginTop: 6,
        fontSize: 16,
        color: "rgba(255,255,255,0.85)",
    },

    cardSubtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "rgba(255,255,255,0.72)",
    },

    cardSeparator: {
        width: "70%",
        height: 1,
        backgroundColor: "rgba(255,255,255,0.25)",
        marginVertical: 24,
    },

    tecnologia: {
        marginTop: 6,
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },

    badge: {
        marginTop: 20,
        borderRadius: 999,
        paddingHorizontal: 18,
        paddingVertical: 8,
    },

    textoBadge: {
        fontWeight: "bold",
        fontSize: 14,
    },

    experiencia: {
        marginTop: 16,
        fontSize: 13,
        color: "rgba(255,255,255,0.72)",
    },
});