import { View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import styles from "./styles";
import Header from "./header"
import Inputs from "./inputs";
import Todo from "./todo";
import Inputs2 from './inputs/index2'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface arrays {
    important: boolean,
    id: number,
    text: string
}

const Parent = () => {
    const [todos, setTodos] = useState<Array<arrays>>([])
    const [search, setSearch] = useState<string>('')
    useEffect(() => {
        let jsonValue:any;
        const start = async () => {
            try {
                jsonValue = await AsyncStorage.getItem('Todo_key')
                jsonValue != null ? JSON.parse(jsonValue) : null;
                console.log(jsonValue)
                if(jsonValue == null && jsonValue == undefined) setTodos([])
                else setTodos(jsonValue)
            } catch (e) {
                alert(e)
                console.log(e)
            }
        }
        start()
    }, [])

    const Add = (text: string): void => {
        if (text) {
            let newid = todos.length + 1;
            const el = { text: text, important: false, id: newid }
            const new_todos = sort(el)
            setTodos(new_todos)
            save(new_todos)
        } else alert('Вы не можете создать заметку пока поле пустое!')
    }
    const delDef = (id: number): void => {
        const idel = todos.findIndex((el) => el.id === id)
        const before = todos.slice(0, idel);
        const after = todos.slice(idel + 1);
        const newarr = [...before, ...after];
        setTodos(newarr)
        save(newarr)
    }
    const importantDef = (id: number) => {
        const idimportant = todos.findIndex((el) => el.id === id)
        todos[idimportant].important = !todos[idimportant].important;
        const new_todos = sort();
        setTodos(new_todos)
        save(new_todos)
    }
    const sort = (el?: arrays) => {
        const important: Array<arrays> = [];
        const notimportant: Array<arrays> = [];
        for (let i = 0; i < todos.length; i++) {
            let list = todos[i];
            if (list.important) important.unshift(list)
            else if (!list.important) notimportant.push(list);
        }
        if (el) notimportant.unshift(el);
        return [...important, ...notimportant];
    }
    const save = async (todo: Array<arrays>) => {
        try {
            const jsonValue = JSON.stringify(todo)
            await AsyncStorage.setItem('Todo_key', jsonValue)
        } catch (e) {
            alert('не удалось сохранить данные')
        }
    }
    const Searchel = (items: Array<arrays>, todoListcopy: string) => {
        if (todoListcopy.length === 0) return items;
        return items.filter((item) => item.text.toLowerCase().indexOf(todoListcopy.toLowerCase()) > -1);
    }
    let visibleitems = Searchel(todos, search);
    return (
        <View style={styles.parent}>
            <Header />
            <View style={styles.inputs}>
                <Inputs2 placeHolder={'Искать заметки'}
                    callBack={(text: string): void => setSearch(text)}
                    source={require('./../assets/cancel.png')} />
                <Inputs placeHolder={'Добавить заметку'}
                    callBack={(text: string): void => Add(text)}
                    source={require('./../assets/tick2.png')} />
                <Todo importantDef={(id) => importantDef(id)} todos={visibleitems} delDef={(id) => delDef(id)} />
            </View>
        </View>
    )
}
export default Parent;