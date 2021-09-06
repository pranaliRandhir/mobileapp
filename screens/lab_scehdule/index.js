/**
 * fileName: lab_schedule/index.js
 * description: the lab_schedule component
 */

 import React, { Component } from "react";
 import { StyleSheet,Dimensions, Image, Text, View, FlatList , TouchableHighlight} from "react-native";
 
 import Icon from "react-native-vector-icons/Fontisto";
 import { Input, Divider ,Button} from "react-native-elements";
 
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 //import { SvgUri } from 'react-native-svg';
 
 const DeviceWidth = Dimensions.get('window').width
 export class LabSchedule extends Component {
   constructor(props) {
     super(props);
     this.state = {
       testList: [],
     };
   }
 
   componentDidMount() {
     const formData = new FormData();
     // console.log('the navigation params is>>>>>>', this.props.route.params);
     const testId = this.props.route.params.iTestId;
     console.log('the navigation params is>>>>>>',  testId );
 
     formData.append("action", "getTests");
 
     ApiClient.post("", formData).then(({ data }) => {
       this.setState({ testList: data });
     });
   }
 
   renderBody() {
     const { testList } = this.state;
     return (
       <View style={{ flex: 1 }}>
 
         <View style={{
           flexDirection: 'row',
         }}>
           <View style={{ flex: 8 }}>
             <Input
               inputContainerStyle={styles.inputContainer}
               leftIconContainerStyle={styles.leftIconContainer}
               inputStyle={styles.input}
               containerStyle={styles.inputRootContainer}
               placeholder="Search for pathologies"
               leftIcon={<Icon name="search" size={18} color="gray" />}
             />
           </View>
           <View style={{ flex: 5, marginLeft:-45}}>
             <Input
               inputContainerStyle={styles.inputContainer}
               leftIconContainerStyle={styles.leftIconContainer}
               inputStyle={styles.input}
               containerStyle={styles.inputRootContainer}
               placeholder="Location"
               leftIcon={<Icon name="search" size={18} color="gray" />}
             />
           </View>
          
         </View>
 
 
 
 
 
         <FlatList
           data={testList}
           numColumns={2}
           renderItem={({ item, index }) => this.renderTestCard(item, index)}
           contentContainerStyle={styles.listContainer}
           columnWrapperStyle={styles.columnWrapper}
         />
       </View>
     );
   }
 
   renderTestCard(item, index) {
     return (
       <View style={styles.cardRootContainer}>
         <View style={styles.cardContentContainer}>
           <View style={styles.cardHeaderContainer}>
             <Image
               source={require("../../assets/images/image.png")}
               style={styles.cardImg}
             />
 
            
             <View style={{
               flexDirection: 'row',
               justifyContent: 'center',
               alignItems: 'center',
               marginLeft: 50,
 
             }}>
               <View>
                 <View style={{ width: DeviceWidth * 0.65 }}>
                   <Text style={styles.testName}>{item.sName}</Text>
                 </View>

                 <TouchableHighlight onPress={this._onPressButton} underlayColor="white" style={styles1.button}>
                    <Text style={styles1.buttonText}>New</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPressButton} underlayColor="white" style={styles1.button}>
                    <Text style={styles1.buttonText}>Search</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._onPressButton} underlayColor="white" style={styles1.button}> 
                    <Text style={styles1.buttonText}>Favorites</Text>
                </TouchableHighlight>
                  <View style={{
                   
                    flexDirection: 'row',
                    
                  }}>
                 
                    <View style={{ marginLeft: 10,flex:5}}>
                      <Button
                        title="10.00 AM"
                        type="outline"
                        style={{alignSelf: 'stretch'}}
                      />
                    </View>
                    <View style={{  marginLeft: 10,flex:5}}>
                      <Button
                        title="12.00 PM"
                        type="outline"

                      />
                    </View>
                    <View style={{ marginLeft: 10,flex:5}}>
                      <Button
                        title="04.00 PM"
                        type="outline"
                      />
                    </View>
                    <View style={{ marginLeft: 10,flex:5 }}>
                      <Button
                        title="06.00 PM"
                        type="outline"
                      />
                    </View>
                  
                  </View>
                
               </View>
             </View>
             {/* </View> */}
             <Image
               source={require("../../assets/images/image.png")}
               style={[styles.cardImg, { marginLeft: 40 }]}
             />
           </View>
 
 
 
         </View>
 
       </View>
     );
   }
 
   render() {
     return (
       <>
         <View style={styles.rootContainer}>
           <Header />
           {this.renderBody()}
           <Footer />
         </View>
       </>
     );
   }
 }
 

 const styles1 = StyleSheet.create({
  container: {
   flexDirection: 'row',
   backgroundColor: 'pink',
   flex:1
  },
  button: {
   flex:1,
   borderRadius: 4,
   borderWidth: 0.5,
   borderColor: '#d6d7da',
   backgroundColor: '#2196F3'
 },
 buttonText: {
  padding: 20,
  color: 'white'
 }
})

 export default LabSchedule;
 