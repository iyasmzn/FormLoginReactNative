import React, { Component } from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableNativeFeedback,
} from 'react-native';

export default class App extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.title}>
					  Form Register.
					</Text>
					<View style={styles.inputGroup}>
						<Text style={styles.textGroup}>
						  Username :
						</Text>
						<TextInput 
							style={styles.textInput}
							autoCompleteType="username"
							placeholder="your name here..."
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.textGroup}>
						  Email :
						</Text>
						<TextInput 
							style={styles.textInput}
							autoCompleteType="username"
							placeholder="your email here..."
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.textGroup}>
						  Password :
						</Text>
						<TextInput 
							style={styles.textInput}
							secureTextEntry={true}
							placeholder="type your password"
						/>
					</View>
					<TouchableNativeFeedback>
					<View style={styles.buttonWrapper}>
						<Text style={styles.buttonText}>
						  SUBMIT
						</Text>
					</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		);
	}
}
// #34d192
// #53edaf
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#53edaf',
	},
	card: {
		width: '90%',
		backgroundColor: 'white',
		padding: 20,
		elevation: 10,
	},
	title: {
		fontSize: 40,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: '#34d192',
		borderBottomWidth: 4,
		borderBottomColor: '#53edaf',
		paddingBottom: 20,
		marginBottom: 20,
		width: '80%',
		letterSpacing: 2
	},
	inputGroup: {
		paddingTop: 5,
		paddingBottom: 15,
	},
	textGroup: {
		fontFamily: 'sans-serif',
		fontWeight: 'bold',
		color: '#34d192',
	},
	textInput: {
		padding: 7,
		paddingVertical: 10,
		color: '#34d192',
		borderBottomWidth: 2,
		borderBottomColor: '#53edaf',
	},
	buttonWrapper: {
		alignItems: 'center',
		backgroundColor: '#34d192',
		paddingVertical: 15,
		borderWidth: 1,
		borderColor: '#53edaf', 
		marginTop: 20,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		letterSpacing: 2
	},
});