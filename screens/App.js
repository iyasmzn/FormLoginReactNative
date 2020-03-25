import React, { Component } from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableNativeFeedback,
	Image,
} from 'react-native';

export default class App extends Component {
	state = {
		username: '',
		email: '',
		password: '',
	}
	takeUsername(tek) {
		this.setState({
			username: tek,
		})
	}
	takeEmail(tek) {
		this.setState({
			email: tek,
		})
	}
	takePassword(tek) {
		this.setState({
			password: tek,
		})
	}
	submitForm() {
		alert(
			'Inserted Form : ' +  
			'Username : ' + this.state.username +
			'Email : ' + this.state.email +
			'Password' + this.state.password

			);
	}
	render() {
		return(
			<View style={styles.container}>

				<Image
				  style={styles.backgroundImage}
				  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJCTBBAoyHTdk_AkdfJr6eZPGRb44K9TJcLC1aRT1yYK0XGlig'}}
				/>
				
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
							placeholder="your name here..."
							onChangeText={ (text) => this.takeUsername(text) }
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.textGroup}>
						  Email :
						</Text>
						<TextInput 
							style={styles.textInput}
							placeholder="your email here..."
							onChangeText={ (text) => this.takeEmail(text) }
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
							onChangeText={ (text) => this.takePassword(text) }
						/>
					</View>
					<TouchableNativeFeedback onPress={ () => this.submitForm() }>
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
		position: 'relative',
		// backgroundColor: '#53edaf',
		// backgroundImage: "url('../../../../dashboard/image/anime-bg.jpg')",
	},
	backgroundImage: {
		position: 'absolute',
		top: 0, bottom: 0, left: 0, right: 0,
	},
	card: {
		width: '90%',
		backgroundColor: 'white',
		padding: 20,
		elevation: 10,
		borderTopEndRadius: 50,
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
		fontSize: 15,
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