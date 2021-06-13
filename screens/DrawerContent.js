import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props){

    const[isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                  <View style={{flexDirection:'row', marginTop:30}}>
                      <Avatar.Image 
                      source={{
                          uri: 'data:image/jpeg;base64,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'
                        }}
                        size={50}
                      />
                      <View style={{marginLeft:10}}>
                          <Title>Lakshmi Pradeep</Title>
                          <Caption>@lakspradee</Caption>
                      </View>

                  </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>

                        </View>

              </View>

                        <Drawer.Section style={styles.drawerContent}>

                        {/* Home */}

                        <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="home-outline"
                        color={color}
                        size={size}/>
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}>

                </DrawerItem>

                {/* Profile */}

                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="account-outline"
                        color={color}
                        size={size}/>
                    )}
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}>

                </DrawerItem>

                {/* Bookmarks */}

                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="bookmark-outline"
                        color={color}
                        size={size}/>
                    )}
                    label="Bookmarks"
                    onPress={() => {props.navigation.navigate('Bookmark')}}>

                </DrawerItem>

                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="home-outline"
                        color={color}
                        size={size}/>
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Settings')}}>

                </DrawerItem>

                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="account-outline"
                        color={color}
                        size={size}/>
                    )}
                    label="Support"
                    onPress={() => {props.navigation.navigate('Support')}}>

                </DrawerItem>

                

                        </Drawer.Section>

                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                    </View>
                                </View>
                            </TouchableRipple>

                        </Drawer.Section>

            </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}/>
                    )}
                    label="Sign Out"
                    onPress={() => {}}>

                </DrawerItem>

            </Drawer.Section>

           
        </View>
    );
}



const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});