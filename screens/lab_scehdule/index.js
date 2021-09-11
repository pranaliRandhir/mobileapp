/**
 * fileName: lab_schedule/index.js
 * description: the lab_schedule component
 */

 import React, { Component } from "react";
 import { StyleSheet,Dimensions, Image, Text, View, FlatList,TouchableOpacity } from "react-native";
 
 import Icon from "react-native-vector-icons/Fontisto";
 import { Input, Divider ,Button} from "react-native-elements";
 
 import { Header, Footer } from "../../components";
 import { HealthOrbitImage } from "../../assets";
 import { styles } from "./styles";
 import ApiClient from "../../utils/api_client";
 
 import { COLOR_PRESETS } from "../../presets/colors";
 import { RouteNames } from "../../navigation/route_names";
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
 
         <View style={{
               flexDirection: 'row',
              //  justifyContent: 'center',
               //alignItems: 'center',
                //marginTop: 2,
                marginBottom: 0,
                marginLeft:20,
                marginRight:20
 
             }}>
            
            
                <View style={[styles.cardRootContainer,{width:80,backgroundColor: '#3c64a3',color:"white",borderBottomRightRadius:0,borderTopRightRadius:0}]}>
                  <View style={styles.cardContentContainer}>
                  <View style={styles.cardHeaderContainer}>
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 50,
        
                    }}>
                      <View>
                        <View style={{ width: DeviceWidth * 0.65 }}>
                          <Text style={styles.Day}>Today</Text>
                        </View>
                        <View style={{ width: DeviceWidth * 0.65 }}>
                          <Text style={styles.Day}>July 19</Text>
                        </View>

                      
                          
                      </View>
                    </View>
                  </View>
                  </View>
                </View>
              
                <View style={[styles.cardRootContainer,{width:80,borderRadius:0, borderStyle: 'solid',borderRightWidth: 2,borderRightColor: 'white',}]}>
                  <View style={styles.cardContentContainer}>
                  <View style={styles.cardHeaderContainer}>
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 50,
        
                    }}>
                      <View>
                        <View style={{ width: DeviceWidth * 0.65 }}>
                          <Text style={styles.day}>Mon</Text>
                        </View>
                        <View style={{ width: DeviceWidth * 0.65 }}>
                          <Text style={styles.day}>July 20</Text>
                        </View>

                      
                          
                      </View>
                    </View>
                  </View>
                  </View>
                </View>
               
                <View style={[styles.cardRootContainer,{width:80,borderRadius:0, borderStyle: 'solid',borderRightWidth: 2,borderRightColor: 'white',}]}>
                  <View style={styles.cardContentContainer}>
                  <View style={styles.cardHeaderContainer}>
                  <View style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 50,
        
                    }}>
                      <View>
                        <View style={{ width: DeviceWidth * 0.65 }}>
                          <Text style={styles.day}>Tues</Text>
                        </View>
                        <View style={{ width: DeviceWidth * 0.65 }}>
                          <Text style={styles.day}>July 21</Text>
                        </View>

                      
                          
                      </View>
                    </View>
                  </View>
                  </View>
                </View>
               
                <View style={[styles.cardRootContainer,{width:80,borderBottomLeftRadius:0,borderTopLeftRadius:0}]}>
                    <View style={styles.cardContentContainer}>
                    <View style={styles.cardHeaderContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 50,
          
                      }}>
                        <View>
                          <View style={{ width: DeviceWidth * 0.65 }}>
                            <Text style={styles.day}>Wed</Text>
                          </View>
                          <View style={{ width: DeviceWidth * 0.65 }}>
                            <Text style={styles.day}>July 22</Text>
                          </View> 
                        </View>
                      </View>
                    </View>
                    </View>
                   
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
      <TouchableOpacity onPress={() => { this.props.navigation.navigate(RouteNames.ORDER, item) }} style={styles.cardRootContainer}>
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

               
                  <View style={{
                   
                   
                   flexDirection: "row",
                    marginLeft: 5,
                    marginRight: 15,
                    justifyContent: 'space-between'
                    
                  }}>
                 
                    <View style={{ marginLeft: 10,marginTop: 10,width: '20%'}}>
                      <Button
                        title="10.00 AM"
                        type="outline"
                        titleStyle= {{
                          fontSize: 6
                        }}
                        
                      />
                    </View>
                    <View style={{ marginLeft: 10,marginTop: 10,width: '20%'}}>
                      <Button
                        title="12.00 PM"
                        type="outline"
                        titleStyle= {{
                          fontSize: 6
                        }}
                        ButtonStyle= {{
                          height:5
                        }}
                        
                      />
                    </View>
                    <View style={{ marginLeft: 10,marginTop: 10,width: '20%'}}>
                      <Button
                        title="04.00 PM"
                        type="outline"
                        titleStyle= {{
                          fontSize: 6,
                          color:"white"
                        }}
                        ButtonStyle= {{
                          height:5,
                         
                        }}
                        containerStyle={{ backgroundColor: '#3c64a3' }}
                        
                        
                      />
                    </View>
                    <View style={{ marginLeft: 10,marginTop: 10,width: '20%'}}>
                      <Button
                        title="06.00 PM"
                        type="outline"
                        titleStyle= {{
                          fontSize: 6
                        }}
                        ButtonStyle= {{
                          height:5
                        }}
                        
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
       </TouchableOpacity>
     );
   }
 
   render() {
     return (
       <>
         <View style={styles.rootContainer}>
           <Header />
           {this.renderBody()}
           {/* <Footer /> */}
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
 