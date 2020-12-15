import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { DrawerItems } from 'react-navigation-drawer'
import MyHeader from '../components/MyHeaderComponent'
import db from '../config'
import { ListItem } from 'react-native-elements'
export default class Donations extends Component {

    constructor() {
        super();
        this.state = {
            allDonations: []
        }
    }

    getDonationDetails = () => {
        db.collection("allDonations").onSnapshot((snapshot) => {
            var allDonations = snapshot.docs.map((document) => { document.data() });
            this.setState({
                allDonations: allDonations
                
            })
        });
    }

    componentDidMount() {
        this.getDonationDetails();
    }

    render() {
        return (
            <View>
                <MyHeader navigation={this.props.navigation} title="Donations" />
                <FlatList keyExtractor={(item, index) => { index.toString() }}

                    data={this.state.allDonations} renderItem={({ item, i }) => {
                        return (
                            <ListItem title={item.BookName} subtitle={item.Reason} key={i}
                                rightElement={
                                    <TouchableOpacity
                                        style={{ backgroundColor: "orange", width: 100, height: 50, }}>

                                        <Text>
                                            send book
                                          </Text>
                                    </TouchableOpacity>
                                }
                                    >  </ListItem>
        )
    }
}> </FlatList >
            </View >
        )
    }
}