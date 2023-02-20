import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    marginBottom: 10,
    },
    label: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '90%',
    marginBottom: 5,
    },
    result: {
    fontSize: 20,
    marginTop: 10,
    },
    genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
    },
    safe: {
        color: '#0f0',
    },
    dangerous: {
        color: '#f00',
    },
    
    nonZero: {
        color: '#ff0',
    },});

export { styles };
