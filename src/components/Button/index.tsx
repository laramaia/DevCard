import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string,
    variant?: "primary" | "secondary" | "outline"
    onPress?: (event: GestureResponderEvent) => void
}

export function Button({ label, variant="primary", onPress}: Props) {
    return(
        <TouchableOpacity onPress={onPress} style={styles[variant].buttonContainer}>
            <Text style={styles[variant].buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}