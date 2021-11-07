import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableHighlight, View, ImageSourcePropType } from "react-native";
import styles from "./styles";

interface props {
    source: ImageSourcePropType,
    callBack: (input: string) => void,
    placeHolder: string
}

const Inputs = ({ source, callBack, placeHolder }: props) => {
    const [input, setInput] = useState('') 
    return (
        <View style={styles.flex}>
            <TextInput placeholderTextColor="grey"
                placeholder={placeHolder}
                style={styles.input}
                multiline={true}
                numberOfLines={2}
                value={input}
                onChangeText={(e) => setInput(e)}
            >
            </TextInput>
            <Pressable style={styles.button} onPress={() => { callBack(input); setInput('')}}>
                <Image style={styles.image} source={source}></Image>
            </Pressable>
        </View>
    )
}

export default Inputs;