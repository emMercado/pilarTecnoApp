import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './HomeStack';
import { CreateStackScreen } from './CreateStack';
import { ProfileStackScreen } from './ProfileStack';
import { MapStackScreen } from './MapStack';
import { PostsStackScreen } from './PostsStack';
import { PostCreate } from '../screens/PostCreate';
import { Icon } from 'react-native-elements';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            /* top: -47, */
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 50,
            height: 50,
            borderRadius: 35,
            backgroundColor: `#daa520`,
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

export const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: `#daa520`,
                activeTintColor: '#fff',
                headerStyle: {
                    backgroundColor: `#d2691e`,
                },
                inactiveTintColor: 'green',
                labelStyle: {

                },
                adaptive: true,
                showLabel: false,
                style: {
                    /* adaptive: true, */
                    flex: 1,
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#d2691e',
                    borderRadius: 3,
                    height: 60,
                    ...styles.shadow
                }
            }}

        >
            <Tab.Screen name="Home" component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
                            <Text style={styles.text}>Home</Text>
                        </View>
                    ),
                }}

            />
            <Tab.Screen name="Profile" component={ProfileStackScreen}
                options={{

                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
                            <Text style={styles.text}>Profile</Text>
                        </View>

                    ),
                }}
            />

            <Tab.Screen name="Posts-Create" component={ProfileStackScreen}
                options={{
                    style: {
                        paddingBottom: 30,
                    },
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name={'plus'} type="font-awesome-5" size={30} color={color} />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />

            <Tab.Screen name="Posts" component={PostsStackScreen}
                options={{

                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name={'marker'} type="font-awesome-5" size={20} color={color} />
                            <Text style={styles.text}>Places</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Map" component={MapStackScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
                            <Text style={styles.text}>Map</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    text: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center'
    }
})