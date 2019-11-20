import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import InputComponent from '../Input';

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15
    },
});

const HomeComponent = () => {
    const [state, setState] = useState({
        owner: '',
        repository: ''
    });

    const handleChange = (newValue, name) => {
        setState(prevState => {
            return {
                ...prevState,
                [name]: newValue
            }
        })
    };

    return (
        <View style={styles.container}>
            <InputComponent
                placeholder='GitHub owner'
                value={state.owner}
                name='owner'
                handleChange={handleChange}
            />
            <InputComponent
                placeholder='Repository name'
                value={state.repository}
                name='repository'
                handleChange={handleChange}
            />
        </View>
    );
}

export default HomeComponent;