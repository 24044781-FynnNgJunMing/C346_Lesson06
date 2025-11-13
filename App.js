import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

const questions = [
    {
        id: 1,
        image: require('./img/Pearl-Harbor.jpg'),
        riddle: "A surprise attack changes history in Hawaii.\nWhat movie am I?",
        options: ['Titanic', 'Ghost Ship', 'Pearl Harbor'],
        answer: 'Pearl Harbor',
    },
    {
        id: 2,
        image: require('./img/Sony-PSP.jpg'),
        riddle: "I’m a shiny rectangle that plays games on the go.\nWhat am I?",
        options: ['Nintendo DS', 'Sony PSP', 'Game Boy Advance'],
        answer: 'Sony PSP',
    },
    {
        id: 3,
        image: require('./img/Moai-Statue.jpg'),
        riddle: "Giant heads stare silently on a remote island.\nWhere am I?",
        options: ['Greece', 'Dubai', 'Easter Island'],
        answer: 'Easter Island',
    },
    {
        id: 4,
        image: require('./img/Girl_with_a_Pearl_Earring.jpg'),
        riddle: "The girl with the pearl.\nWho painted this?",
        options: ['Vincent van Gogh', 'Jan Vermeer Van Delft', 'Leonardo da Vinci'],
        answer: 'Jan Vermeer Van Delft',
    },
];

const MyApp = () => {
    const [answers, setAnswers] = useState({});

    const handleSubmit = () => {
        const score = questions.reduce(
            (count, q) => count + (answers[q.id] === q.answer ? 1 : 0),
            0
        );
        Alert.alert('Quiz Results', `You got ${score} out of ${questions.length} correct!`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBox} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.header}>Welcome to the Challenge Zone!</Text>

                {questions.map(({ id, image, riddle, options }) => (
                    <View key={id} style={styles.questionBox}>
                        <Image source={image} style={styles.image} />
                        <Text style={styles.riddle}>{riddle}</Text>

                        <Picker
                            selectedValue={answers[id] || ''}
                            onValueChange={(value) => setAnswers({ ...answers, [id]: value })}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select your answer..." value="" />
                            {options.map((opt) => (
                                <Picker.Item key={opt} label={opt} value={opt} />
                            ))}
                        </Picker>
                    </View>
                ))}

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit Answers</Text>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    topBox: { backgroundColor: '#A9A9A9', width: '100%', height: 50 },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginVertical: 10,
    },
    scrollContent: { alignItems: 'center', paddingBottom: 40 },
    questionBox: {
        width: '90%',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fafafa',
    },
    image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 10 },
    riddle: { textAlign: 'center', fontSize: 16, marginBottom: 10 },
    picker: { backgroundColor: '#f2f2f2' },
    button: {
        backgroundColor: '#B23B23',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center',
    },
    buttonText: { color: 'white', fontWeight: 'bold' },
});

export default MyApp;
