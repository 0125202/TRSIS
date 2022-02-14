import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Button, StyleSheet, Platform, StatusBar, Image } from "react-native";
import { Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";


//colors
import { Colors } from "./../components/style";

import {
  // Header,
  // IconButton,
  ClaimRewardButton, 
  VoucherName, 
  RewardsImage, 
  RewardContainer, 
  VoucherPoints, 
  VoucherDes, 
  RewardsDetailsBox,
  Line,
  ButtonText,
  StyledButton

} from "./../components/style"

import { Entypo } from "@expo/vector-icons"; 
//Colors
const { brand, darkLight, primary } = Colors;


const Rewards = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <Avatar.Image source={require("./../assets/icons/betteruser.png")} size={80} backgroundColor={"#7FFFD4"} />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Your Name
            </Title>
            <Caption style={styles.caption}>Points : 420</Caption>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 30,
          flex: 1,
        }}
      >
         {/* You may start coding here. :D*/}
      
      <View style={styles.menuWrapper}>
      <RewardContainer>
           <RewardsImage 
              resizeMode="cover" 
              source={require("./../assets/img/img1.jpg")}
              style={{
                position: 'relative',
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
              />
              <RewardsDetailsBox>
                <VoucherName >RewardsName</VoucherName>
                <VoucherDes >Rewards Description</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints >10 Pts</VoucherPoints>
              <ClaimRewardButton>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true} > Claim </ButtonText>
              </ClaimRewardButton>    
     </RewardContainer>
      </View>
      {/*from below here it shall start duplicating :3*/}
      <View style={styles.menuWrapper}>
      <RewardContainer>
           <RewardsImage 
              resizeMode="cover" 
              source={require("./../assets/img/img1.jpg")}
              style={{
                position: 'relative',
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
              />
              <RewardsDetailsBox>
                <VoucherName >RewardsName</VoucherName>
                <VoucherDes >Rewards Description</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints >10 Pts</VoucherPoints>
              <ClaimRewardButton>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true} > Claim </ButtonText>
              </ClaimRewardButton>    
     </RewardContainer>
      </View>
      {/*below here also duplicate*/}
      <View style={styles.menuWrapper}>
      <RewardContainer>
           <RewardsImage 
              resizeMode="cover" 
              source={require("./../assets/img/img1.jpg")}
              style={{
                position: 'relative',
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
              />
              <RewardsDetailsBox>
                <VoucherName >RewardsName</VoucherName>
                <VoucherDes >Rewards Description</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints >10 Pts</VoucherPoints>
              <ClaimRewardButton>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true} > Claim </ButtonText>
              </ClaimRewardButton>    
     </RewardContainer>
      </View>
      {/*another duplicates aih*/}
      <View style={styles.menuWrapper}>
      <RewardContainer>
           <RewardsImage 
              resizeMode="cover" 
              source={require("./../assets/img/img1.jpg")}
              style={{
                position: 'relative',
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
              />
              <RewardsDetailsBox>
                <VoucherName >RewardsName</VoucherName>
                <VoucherDes >Rewards Description</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints >10 Pts</VoucherPoints>
              <ClaimRewardButton>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true} > Claim </ButtonText>
              </ClaimRewardButton>    
     </RewardContainer>
      </View> 
      {/*ok duplicate ends here HAHAH*/}
      </View>
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "aquamarine",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },


});
