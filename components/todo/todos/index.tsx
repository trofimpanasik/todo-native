import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import styles from "./styles";

interface TodoProps {
    element: {
        text: string;
        important: boolean;
        id: number;
    }
    delDef: (id: number) => void;
    importantDef: (id: number) => void;
}

const Todos = ({element, delDef, importantDef }: TodoProps) => {
    const {text, important, id} = element
    return (
        <View style={styles.flex}>
            <Text style={styles.input}>
                {text}
            </Text>
            <Pressable style={[styles.first, styles.button]} onPress={() => delDef(id)}>
                <Image style={styles.image} source={require('./../../../assets/Delete.png')}></Image>
            </Pressable>
            <Pressable style={[styles.second, important ? styles.shadow : null, styles.button]} onPress={() => importantDef(id)}>
                <Image style={styles.image} source={require('./../../../assets/Star.png')}></Image>
            </Pressable>
        </View>
    )
}

export default Todos;