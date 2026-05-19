import { View, Pressable } from "react-native";

type Props = {
  value: string;
  onChange: (color: string) => void;
};

export function ColorSelect({ value, onChange }: Props) {
  const colors = ["#2565f0", "#22c55e", "#763bdd"];

  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      {colors.map((c) => (
        <Pressable
          key={c}
          onPress={() => onChange(c)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: c,
            borderWidth: value === c ? 2 : 0,
            borderColor: "#000",
          }}
        />
      ))}
    </View>
  );
}