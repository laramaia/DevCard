import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../styles/constants';
import { useCard } from '../app/context/CardContext';

export default function Preview() {
    const { cardData } = useCard();

    const {
        name,
        role,
        company,
        specialty,
        experience,
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
                    <Text style={styles.tituloAviso}>Nenhum cartão criado ainda</Text>

                    <Text style={styles.textoAviso}>
                        Preencha o cadastro primeiro para gerar o seu cartão de visita digital.
                    </Text>

                    <Pressable
                        style={styles.botaoFinalizar}
                        onPress={() => router.replace('/')}
                    >
                        <Text style={styles.textoFinalizar}>Começar agora</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    const inicial = name.trim().charAt(0).toUpperCase();

    const nivel = buscarNivel(Number(experience));

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Seu Cartão</Text>

            <View style={styles.cartao}>
                <View style={styles.brilhoMaior} />
                <View style={styles.brilhoMenor} />

                <View style={styles.avatar}>
                    <Text style={styles.letraAvatar}>{inicial}</Text>
                </View>

                <Text style={styles.nome}>{name}</Text>

                <Text style={styles.cargo}>{role}</Text>

                {company ? (
                    <Text style={styles.empresa}>{company}</Text>
                ) : null}

                <View style={styles.divisor} />

                <Text style={styles.especialista}>
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

            <View style={styles.acoes}>
                <Pressable
                    style={styles.botaoEditar}
                    onPress={() => router.back()}
                >
                    <Text style={styles.textoEditar}>
                        Editar dados
                    </Text>
                </Pressable>

                <Pressable
                    style={styles.botaoFinalizar}
                    onPress={() => router.replace('/sucesso')}
                >
                    <Text style={styles.textoFinalizar}>
                        Finalizar
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

function buscarNivel(anos: number) {
    if (anos >= 6) {
        return {
            texto: 'Sênior',
            fundo: '#facc15',
            corTexto: '#4a3500',
        };
    }

    if (anos >= 3) {
        return {
            texto: 'Pleno',
            fundo: '#2563eb',
            corTexto: '#ffffff',
        };
    }

    return {
        texto: 'Júnior',
        fundo: '#e5e7eb',
        corTexto: '#374151',
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    aviso: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },

    tituloAviso: {
        fontSize: 26,
        fontWeight: 'bold',
        color: THEME.colors.primary,
        textAlign: 'center',
    },

    textoAviso: {
        fontSize: 16,
        color: THEME.colors.subtitle,
        textAlign: 'center',
        lineHeight: 24,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: THEME.colors.primary,
        marginBottom: 24,
    },

    cartao: {
        backgroundColor: THEME.colors.primary,
        borderRadius: 24,
        padding: 28,
        alignItems: 'center',
        overflow: 'hidden',
        minHeight: 360,
        justifyContent: 'center',
    },

    brilhoMaior: {
        position: 'absolute',
        width: 140,
        height: 140,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.12)',
        top: -30,
        right: -40,
    },

    brilhoMenor: {
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.10)',
        top: 20,
        right: 20,
    },

    avatar: {
        width: 84,
        height: 84,
        borderRadius: 999,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
    },

    letraAvatar: {
        fontSize: 34,
        fontWeight: 'bold',
        color: THEME.colors.primary,
    },

    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    cargo: {
        marginTop: 6,
        fontSize: 16,
        color: 'rgba(255,255,255,0.85)',
    },

    empresa: {
        marginTop: 4,
        fontSize: 14,
        color: 'rgba(255,255,255,0.72)',
    },

    divisor: {
        width: '70%',
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.25)',
        marginVertical: 24,
    },

    especialista: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
    },

    tecnologia: {
        marginTop: 6,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    badge: {
        marginTop: 20,
        borderRadius: 999,
        paddingHorizontal: 18,
        paddingVertical: 8,
    },

    textoBadge: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    experiencia: {
        marginTop: 16,
        fontSize: 13,
        color: 'rgba(255,255,255,0.72)',
    },

    acoes: {
        marginTop: 32,
        gap: 14,
    },

    botaoEditar: {
        height: 52,
        borderRadius: THEME.border.radius.md,
        borderWidth: 2,
        borderColor: THEME.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    textoEditar: {
        color: THEME.colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },

    botaoFinalizar: {
        height: 52,
        borderRadius: THEME.border.radius.md,
        backgroundColor: THEME.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoFinalizar: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});