import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Todos from "./todos";

interface todoProps {
    delDef: (id: number) => void,
    importantDef: (id: number) => void,
    todos: {
        text: string,
        id: number,
        important: boolean
    }[]
}

const Todo = ({ delDef, importantDef, todos }: todoProps) => {
    const todo = todos.map(element => {
        const { id } = element
        return <Todos key={id} element={element} delDef={() => delDef(id)} importantDef={() => importantDef(id)} />
    })

    return (
        <View>
            {todos.length === 0 ?
                <Text style={styles.text}>
                    Пока что у вас нет заметок
                </Text> : null
            }
            {todos.length ?
                <View>
                   {todo}
                </View> : null
            }
        </View>
    )
}

export default Todo