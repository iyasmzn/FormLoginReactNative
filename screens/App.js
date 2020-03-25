import React, { Component } from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	ScrollView,
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
	changePassword(tek) {
		var passData 		= tek.toString();
		var lengthData 	= passData.length;
		var angka 			=	1;
		var Simbol 			=	'*'+lengthData;
		for (let i = 0; i < lengthData; i++) {
		return Simbol;
		}
	}
	placePassword(teek) {
		this.setState({
			password: this.changePassword(teek),
		})
	}
	submitForm() {
		alert(
			'Inserted Form : ' +  
			'\n\n\nUsername : ' + this.state.username +
			'\n\nEmail : ' + this.state.email +
			'\n\nPassword : ' + this.state.password +
			'\n\n'
			);
	}
	render() {
		return(
			<KeyboardAvoidingView style={{flex: 1}} behavior="height">
			  
			<View style={styles.container}>

				<Image
				  style={styles.backgroundImage}
				  source={{uri: 'https://images.wallpapersden.com/image/download/tile-5k_65712_5120x2880.jpg'}}
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
							onChangeText={ (text) => this.placePassword(text) }
						/>
					</View>
					<TouchableOpacity onPress={ () => this.submitForm() }>
						<View style={styles.buttonWrapper}>
							<Text style={styles.buttonText}>
							  SUBMIT
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			</KeyboardAvoidingView>
		);
	}
}
// #34d192
// #53edaf
const styles = StyleSheet.create({
	contentContainer: {
		height: 'auto',
	},
	scrollView: {
		height: '100%',
	},
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
		color: '#ef5c79',
		borderBottomWidth: 4,
		borderBottomColor: '#ef5c79',
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
		color: '#ffa4b3',
		fontSize: 15,
	},
	textInput: {
		padding: 7,
		paddingVertical: 10,
		color: '#ef5c79',
		borderBottomWidth: 2,
		borderBottomColor: '#ffa4b3',
	},
	buttonWrapper: {
		alignItems: 'center',
		backgroundColor: '#ef5c79',
		paddingVertical: 15,
		borderWidth: 1,
		borderColor: '#ffa4b3', 
		marginTop: 20,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		letterSpacing: 2
	},
});