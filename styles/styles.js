import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 15,
        width: '90%',
        padding: 10,
        marginBottom: 1,
    },
    inputContainer: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //textAlign: 'center',

        borderRadius: 50,
        paddingHorizontal: 150,
    },
    button: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },


    label: {
        fontSize: 18,
        fontWeight: 'bold',
        //width: '90%',
        marginBottom: 5,
    },
    result: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center'
    },
    gendCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 10,
        marginTop: 10,
    },
    calcCont: {
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 10,
        marginTop: 10,
    },
    safe: {
        color: '#0f0',
    },
    dangerous: {
        color: '#f00',
    },

    nonZero: {
        color: '#ff0',
    },
});

export { styles };
