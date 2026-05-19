import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useCard } from "../app/context/CardContext";
import { Button } from "../components/Button";
import { ColorSelect } from "../components/ColorSelect";

export default function CadastroScreen() {
  const router = useRouter();
  const { updateCardData } = useCard();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [experience, setExperience] = useState("");
  const [color, setColor] = useState("");

  const handleAdvance = () => {
    updateCardData({ name, role, company, specialty, experience });
    router.push('/preview');
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 24 }}>
      <Text style={styles.title}>Preencha seus dados</Text>

      <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Cargo" value={role} onChangeText={setRole} style={styles.input} />
      <TextInput placeholder="Empresa" value={company} onChangeText={setCompany} style={styles.input} />
      <TextInput placeholder="Especialidade" value={specialty} onChangeText={setSpecialty} style={styles.input} />
      <TextInput placeholder="Anos de experiência" value={experience} onChangeText={setExperience} keyboardType="numeric" style={styles.input} />
      <Text style={styles.label}>Escolha a cor do cartão</Text>

      <View style={styles.colorSection}>
        <ColorSelect value={color} onChange={setColor} />
      </View>

      <Button variant="primary" label="Gerar Cartão" onPress={handleAdvance} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 16,

  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  colorSection: {
    marginBottom: 24,
  },
});