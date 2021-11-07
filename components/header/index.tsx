import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Header: React.FC = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>
                Мои задачи:
            </Text>
        </View>
    )
}

export default Header;