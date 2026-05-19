import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string;
    role: string;
    company?: string;
    specialty: string;
    experience: string;
    color: string;
}

export function Card({
    name,
    role,
    company,
    specialty,
    experience,
    color
}: Props) {

    const inicial = name.trim().charAt(0).toUpperCase();

    const nivel = buscarNivel(Number(experience));

    return (
        <View
    style={[
        styles.cardContainer,
        { backgroundColor: color }]}>
            <View style={styles.brilhoMaior} />
            <View style={styles.brilhoMenor} />

            <View style={styles.cardAvatarContainer}>
                <Text style={styles.cardAvatarLetter}>
                    {inicial}
                </Text>
            </View>

            <Text style={styles.cardTitle}>
                {name}
            </Text>

            <Text style={styles.cardText}>
                {role}
            </Text>

            {company ? (
                <Text style={styles.cardSubtitle}>
                    {company}
                </Text>
            ) : null}

            <View style={styles.cardSeparator} />

            <Text style={styles.cardSubtitle}>
                Especialidade
            </Text>

            <Text style={styles.tecnologia}>
                {specialty}
            </Text>

            <View
                style={[
                    styles.badge,
                    { backgroundColor: nivel.fundo },
                ]}
            >
                <Text
                    style={[
                        styles.textoBadge,
                        { color: nivel.corTexto },
                    ]}
                >
                    {nivel.texto}
                </Text>
            </View>

            <Text style={styles.experiencia}>
                {experience} anos de experiência
            </Text>
        </View>
    );
}

function buscarNivel(anos: number) {
    if (anos >= 6) {
        return {
            texto: "Sênior",
            fundo: "#facc15",
            corTexto: "#4a3500",
        };
    }

    if (anos >= 3) {
        return {
            texto: "Pleno",
            fundo: "#2563eb",
            corTexto: "#ffffff",
        };
    }

    return {
        texto: "Júnior",
        fundo: "#e5e7eb",
        corTexto: "#374151",
    };
}