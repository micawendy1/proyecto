import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        //! fetch user with an api...
        /* like 
            fetchUser(..get token..){(user)=>{
                    setUser(user)
                }
            }
         */
        
        
        setUser({
            image_url: "",
            name: "tester",
            followers: 1820,
            mutualFollows: 530,
            following: 2403,
            description: "Hola Yo soy el teste de la applicacion \nYo se que me siento mucho mas fuerte sin tu amor..",
            posts: [
                {
                    image_url: "",
                    likes: 20,
                }
            ]
        })

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <View style={styles.avatar}>
                        <Avatar.Image
                            source={{
                                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                            }}
                            size={80}
                        />
                    </View>

                    <View style={styles.userData}>
                        <View style={{ padding: 10 }}><Text style={styles.title}>{user.name}</Text></View>
                        <View style={styles.follows}>
                            <View style={styles.followsItem}>
                                <Text>{user.followers}</Text>
                                <Text style={{ color: "#777777", marginLeft: 20 }}>Seguidores</Text>
                            </View>
                            <View style={styles.followsItem}>
                                <Text>{user.mutualFollows}</Text>
                                <Text style={{ color: "#777777", marginLeft: 20 }}>Seguidos</Text>
                            </View>
                            <View style={styles.followsItem}>
                                <Text>{user.following}</Text>
                                <Text style={{ color: "#777777", marginLeft: 20 }}>Siguiendo</Text>
                            </View>
                        </View>

                        <View><Text style={styles.biografy}><p>{user.description}</p></Text></View>
                    </View>
                </View>
            </View>

            <View style={styles.posteos}>

            </View>


        </SafeAreaView>);
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 15,
        marginBottom: 5,
    },
    avatar: {
        width: "20%",
    },
    userData: {
        width: "80%",
        alignItems: 'center'
    },
    follows: {
        flexDirection: "row",
    },
    followsItem: {
        alignItems: 'center',
        color: "#777777",
        marginLeft: 20,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    biografy: {
        "max-inline-size": "40ch",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    posteos: {
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
    },

});