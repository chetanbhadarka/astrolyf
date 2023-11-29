import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import {CustomHeader} from '../../../components';
import {AppService} from '../../../services';
import {VALID_RESPONSE} from '../../../constants';
import Snackbar from 'react-native-snackbar';
import {CustomLoader} from '../../../components';

const appService = new AppService();

export default function index(props) {
  const [activeStep, setActiveStep] = useState(0);

  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [height, setHeight] = useState('');
  const [heightErr, setHeightErr] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [motherTongueErr, setMotherTongueErr] = useState('');
  const [caste, setCaste] = useState('');
  const [casteErr, setCasteErr] = useState('');
  const [religion, setReligion] = useState('');
  const [religionErr, setReligionErr] = useState('');
  const [annIncome, setAnnIncome] = useState('');
  const [annIncomeErr, setAnnIncomeErr] = useState('');

  const [summary, setSummary] = useState('');
  const [family, setFamily] = useState('');
  const [familyErr, setFamilyErr] = useState('');
  const [education, setEducation] = useState('');
  const [educationErr, setEducationErr] = useState('');
  const [occupation, setOccupation] = useState('');
  const [occupationErr, setOccupationErr] = useState('');

  const [highEducation, setHighEducation] = useState('');
  const [highEducationErr, setHighEducationErr] = useState('');
  const [ugDegree, setUgDegree] = useState('');
  const [ugCollege, setUgCollege] = useState('');
  const [pgDegree, setPgDegree] = useState('');
  const [pgCollege, setPgCollege] = useState('');
  const [orgName, setOrgName] = useState('');

  const [motherOccupation, setMotherOccupation] = useState('');
  const [motherOccupationErr, setMotherOccupationErr] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [fatherOccupationErr, setFatherOccupationErr] = useState('');
  const [sister, setSister] = useState('');
  const [brother, setBrother] = useState('');
  const [gothra, setGothra] = useState('');
  const [gothraErr, setGothraErr] = useState('');
  const [maternalGothra, setMaternalGothra] = useState('');
  const [maternalGothraErr, setMaternalGothraErr] = useState('');
  const [familyType, setFamilyType] = useState('');
  const [familyTypeErr, setFamilyTypeErr] = useState('');
  const [familyIncome, setFamilyIncome] = useState('');
  const [familyIncomeErr, setFamilyIncomeErr] = useState('');
  const [location, setLocation] = useState('');
  const [locationErr, setLocationErr] = useState('');

  const [habits, setHabits] = useState('');
  const [assests, setAssets] = useState('');
  const [languages, setLanguages] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [residentialStatus, setResidentialStatus] = useState('');
  const [specialCases, setSpecialCases] = useState('');

  const [altEmail, setAltEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileErr, setMobileErr] = useState('');
  const [altMobile, setAltMobile] = useState('');
  const [landline, setLandline] = useState('');
  const [suitabletime, setSuitableTime] = useState('');
  const [contactAddress, setContactAddress] = useState('');
  const [parentAddress, setParentAddress] = useState('');

  const [loading, setLoading] = useState(false);

  const heightRef = createRef();
  const motherTongueRef = createRef();
  const casteRef = createRef();
  const religionRef = createRef();
  const annIncomeRef = createRef();

  const familyRef = createRef();
  const educationRef = createRef();
  const occupationRef = createRef();

  const ugDegreeRef = createRef();
  const ugCollegeRef = createRef();
  const pgDegreeRef = createRef();
  const pgCollegeRef = createRef();
  const orgNameRef = createRef();

  const fatherOccupationRef = createRef();
  const sisterRef = createRef();
  const brotherRef = createRef();
  const gothraRef = createRef();
  const maternalGothraRef = createRef();
  const familyTypeRef = createRef();
  const familyIncomeRef = createRef();
  const locationRef = createRef();

  const assetsRef = createRef();
  const languagesRef = createRef();
  const bloodGroupRef = createRef();
  const residentialStatusRef = createRef();
  const specialCasesRef = createRef();

  const altEmailRef = createRef();
  const mobileRef = createRef();
  const altMobileRef = createRef();
  const landlineRef = createRef();
  const suitableTimeRef = createRef();
  const contactAddRef = createRef();
  const parentAddRef = createRef();

  const onStepPress = activeStep => {
    setActiveStep(activeStep);
  };

  const ErrorText = props => {
    return (
      <View>
        <Text style={{color: 'red', fontSize: 12}}>{props.errorText}</Text>
      </View>
    );
  };

  const stepOneDone = () => {
    let isValid = true;

    if (name.trim() == 0) {
      isValid = false;
      setNameErr('Please enter name');
    }

    if (height.trim() == 0) {
      isValid = false;
      setHeightErr('Please enter height');
    }

    if (motherTongue.trim() == 0) {
      isValid = false;
      setMotherTongueErr('Please enter mother tongue');
    }

    if (caste.trim() == 0) {
      isValid = false;
      setCasteErr('Please enter caste');
    }

    if (religion.trim() == 0) {
      isValid = false;
      setReligionErr('Please enter religion');
    }

    if (annIncome.trim() == 0) {
      isValid = false;
      setAnnIncomeErr('Please enter annual income');
    }

    if (isValid) {
      setActiveStep(1);
    }
  };

  const stepTwoDone = () => {
    let isValid = true;

    if (family.trim() == 0) {
      isValid = false;
      setFamilyErr('Please enter family');
    }

    if (education.trim() == 0) {
      isValid = false;
      setEducationErr('Please enter education');
    }
    if (occupation.trim() == 0) {
      isValid = false;
      setOccupationErr('Please enter occupation');
    }
    if (isValid) {
      setActiveStep(2);
    }
  };

  const stepThreeDone = () => {
    let isValid = true;

    if (highEducation.trim() == 0) {
      isValid = false;
      setHighEducationErr('Please enter high education');
    }

    if (isValid) {
      setActiveStep(3);
    }
  };

  const stepFourDone = () => {
    let isValid = true;

    if (motherOccupation.trim() == 0) {
      isValid = false;
      setMotherOccupationErr("Please enter mother's occupation");
    }

    if (fatherOccupation.trim() == 0) {
      isValid = false;
      setFatherOccupationErr("Please enter father's occupation");
    }

    if (gothra.trim() == 0) {
      isValid = false;
      setGothraErr('Please enter gothra');
    }

    if (maternalGothra.trim() == 0) {
      isValid = false;
      setMaternalGothraErr('Please enter maternalGothra');
    }

    if (familyType.trim() == 0) {
      isValid = false;
      setFamilyTypeErr('Please enter familyType');
    }

    if (familyIncome.trim() == 0) {
      isValid = false;
      setFamilyIncomeErr('Please enter familyIncome');
    }

    if (location.trim() == 0) {
      isValid = false;
      setLocationErr('Please enter location');
    }

    if (isValid) {
      setActiveStep(4);
    }
  };

  const addUserDetails = async () => {
    let isValid = true;

    if (mobile.trim() == 0) {
      isValid = false;
      setMobileErr('Please enter mobile');
    }

    if (isValid) {
      setLoading(true);
      const payload = {
        full_name: name,
        height: height,
        mother_tongue: motherTongue,
        caste: caste,
        religion: religion,
        annual_income: annIncome,
        summary: summary.trim() != 0 ? summary : '',
        family: family,
        education: education,
        occupation: occupation,
        location: location,
        highest_education: highEducation,
        under_graduate_degree: ugDegree.trim() != 0 ? ugDegree : '',
        under_graduate_college: ugCollege.trim() != 0 ? ugCollege : '',
        post_graduate_degree: pgDegree.trim() != 0 ? pgDegree : '',
        post_graduate_college: pgCollege.trim() != 0 ? pgCollege : '',
        organization_name: orgName.trim() != 0 ? orgName : '',
        mother_occupation: motherOccupation,
        father_occupation: fatherOccupation,
        sister: sister.trim() != 0 ? sister : '',
        brother: brother.trim() != 0 ? brother : '',
        gothra: gothra,
        maternal_gothra: maternalGothra,
        family_type: familyType,
        family_income: familyIncome,
        alternate_email: altEmail.trim() != 0 ? altEmail : '',
        mobile: mobile,
        alternate_mobile: altMobile.trim() != 0 ? altMobile : null,
        landline: landline.trim() != 0 ? landline : null,
        suitable_start_time: new Date().toLocaleString(),
        suitable_end_time: new Date().toLocaleString(),
        contact_adress: contactAddress.trim() != 0 ? contactAddress : '',
        parent_adress: parentAddress.trim() != 0 ? parentAddress : '',
      };
      let response = await appService.addUsersDetails(payload);
      if (response && response.status === VALID_RESPONSE.STATUS_ID_CREATION) {
        Snackbar.show({
          text: 'Success',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'green',
        });
        setLoading(false);
        props.navigation.goBack();
      } else {
        setLoading(false);
        // Snackbar.show({
        //   text: response.data.message,
        //   duration: Snackbar.LENGTH_LONG,
        //   backgroundColor: 'red',
        // });
        alert(response.data.message);
      }
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* Custom Header */}
      <CustomHeader {...props} />

      {/* Main Content */}
      <View style={{marginTop: 20, marginBottom: 10}}>
        <StepIndicator
          currentPosition={activeStep}
          stepCount={6}
          direction="horizontal"
          // onPress={onStepPress}
        />
      </View>

      {activeStep === 0 ? (
        <>
          <View style={{alignItems: 'center', marginTop: 5, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                letterSpacing: 0.3,
              }}>
              {'Basic Details'}
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 10,
                marginBottom: 50,
                marginHorizontal: 30,
                padding: 20,
                paddingBottom: 80,
                borderRadius: 10,
                backgroundColor: '#FFF',
                elevation: 4,
              }}>
              <Text style={styles.TextHeader}>{'Full Name'}</Text>

              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter Name"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  heightRef.current && heightRef.current.focus()
                }
              />
              {nameErr ? <ErrorText errorText={nameErr} /> : null}

              <Text style={styles.TextHeader}>{'Height'}</Text>
              <TextInput
                ref={heightRef}
                value={height}
                onChangeText={setHeight}
                placeholder="Enter Height"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  motherTongueRef.current && motherTongueRef.current.focus()
                }
              />
              {heightErr ? <ErrorText errorText={heightErr} /> : null}

              <Text style={styles.TextHeader}>{'Mother Tongue'}</Text>

              <TextInput
                ref={motherTongueRef}
                value={motherTongue}
                onChangeText={setMotherTongue}
                placeholder="Enter Mother Tongue"
                placeholderTextColor={'grey'}
                style={styles.TextInput}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  casteRef.current && casteRef.current.focus()
                }
              />
              {motherTongueErr ? (
                <ErrorText errorText={motherTongueErr} />
              ) : null}

              <Text style={styles.TextHeader}>{'Caste, Sect'}</Text>
              <TextInput
                ref={casteRef}
                value={caste}
                onChangeText={setCaste}
                placeholder="Enter Caste, Sect"
                placeholderTextColor={'grey'}
                style={styles.TextInput}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  religionRef.current && religionRef.current.focus()
                }
              />
              {casteErr ? <ErrorText errorText={casteErr} /> : null}

              <Text style={styles.TextHeader}>{'Religion'}</Text>
              <TextInput
                ref={religionRef}
                value={religion}
                onChangeText={setReligion}
                placeholder="Enter Religion"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  annIncomeRef.current && annIncomeRef.current.focus()
                }
              />
              {religionErr ? <ErrorText errorText={religionErr} /> : null}

              <Text style={styles.TextHeader}>{'Annual Income,Location'}</Text>
              <TextInput
                ref={annIncomeRef}
                value={annIncome}
                onChangeText={setAnnIncome}
                keyboardType={'number-pad'}
                placeholder="Enter Annual Income,Location"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={true}
                returnKeyType="done"
              />
              {annIncomeErr ? <ErrorText errorText={annIncomeErr} /> : null}

              <TouchableOpacity style={styles.NextBtn} onPress={stepOneDone}>
                <Text style={styles.NextBtnText}>{'NEXT'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : activeStep === 1 ? (
        <>
          <View style={{alignItems: 'center', marginTop: 5, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                letterSpacing: 0.3,
              }}>
              {'About Me'}
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 10,
                marginBottom: 50,
                marginHorizontal: 30,
                padding: 20,
                paddingBottom: 80,
                borderRadius: 10,
                backgroundColor: '#FFF',
                elevation: 4,
              }}>
              <Text style={styles.TextHeader}>{'Summary'}</Text>
              <TextInput
                value={summary}
                onChangeText={setSummary}
                placeholder="Enter Summary"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  familyRef.current && familyRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'My Family'}</Text>

              <TextInput
                ref={familyRef}
                value={family}
                onChangeText={setFamily}
                placeholder="Enter My Family"
                placeholderTextColor={'grey'}
                style={styles.TextInput}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  educationRef.current && educationRef.current.focus()
                }
              />
              {familyErr ? <ErrorText errorText={familyErr} /> : null}

              <Text style={styles.TextHeader}>{'Education'}</Text>

              <TextInput
                ref={educationRef}
                value={education}
                onChangeText={setEducation}
                placeholder="Enter Education"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  occupationRef.current && occupationRef.current.focus()
                }
              />
              {educationErr ? <ErrorText errorText={educationErr} /> : null}

              <Text style={styles.TextHeader}>{'Occupation'}</Text>

              <TextInput
                ref={occupationRef}
                value={occupation}
                onChangeText={setOccupation}
                placeholder="Enter Occupation"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="done"
              />
              {occupationErr ? <ErrorText errorText={occupationErr} /> : null}

              <TouchableOpacity style={styles.NextBtn} onPress={stepTwoDone}>
                <Text style={styles.NextBtnText}>{'NEXT'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : activeStep === 2 ? (
        <>
          <View style={{alignItems: 'center', marginTop: 5, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                letterSpacing: 0.3,
              }}>
              {'Education & Career'}
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 10,
                marginBottom: 50,
                marginHorizontal: 30,
                padding: 20,
                paddingBottom: 80,
                borderRadius: 10,
                backgroundColor: '#FFF',
                elevation: 4,
              }}>
              <Text style={styles.TextHeader}>{'Highest Education'}</Text>
              <TextInput
                value={highEducation}
                onChangeText={setHighEducation}
                placeholder="Enter Highest Education"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  ugDegreeRef.current && ugDegreeRef.current.focus()
                }
              />
              {highEducationErr ? (
                <ErrorText errorText={highEducationErr} />
              ) : null}

              <Text style={styles.TextHeader}>{'UG Degree'}</Text>

              <TextInput
                ref={ugDegreeRef}
                value={ugDegree}
                onChangeText={setUgDegree}
                placeholder="Enter UG Degree"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  ugCollegeRef.current && ugCollegeRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'UG College'}</Text>

              <TextInput
                ref={ugCollegeRef}
                value={ugCollege}
                onChangeText={setUgCollege}
                placeholder="Enter UG College"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  pgDegreeRef.current && pgDegreeRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'PG Degree'}</Text>

              <TextInput
                ref={pgDegreeRef}
                value={pgDegree}
                onChangeText={setPgDegree}
                placeholder="Enter PG Degree"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  pgCollegeRef.current && pgCollegeRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'PG College'}</Text>

              <TextInput
                ref={pgCollegeRef}
                value={pgCollege}
                onChangeText={setPgCollege}
                placeholder="Enter PG College"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  orgNameRef.current && orgNameRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Organization Name'}</Text>

              <TextInput
                ref={orgNameRef}
                value={orgName}
                onChangeText={setOrgName}
                placeholder="Enter Organization Name"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="done"
              />

              <TouchableOpacity style={styles.NextBtn} onPress={stepThreeDone}>
                <Text style={styles.NextBtnText}>{'NEXT'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : activeStep === 3 ? (
        <>
          <View style={{alignItems: 'center', marginTop: 5, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                letterSpacing: 0.3,
              }}>
              {'Family Details'}
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 10,
                marginBottom: 50,
                marginHorizontal: 30,
                padding: 20,
                paddingBottom: 80,
                borderRadius: 10,
                backgroundColor: '#FFF',
                elevation: 4,
              }}>
              <Text style={styles.TextHeader}>{"Mother's Occupation"}</Text>
              <TextInput
                value={motherOccupation}
                onChangeText={setMotherOccupation}
                placeholder="Enter Mother Occupation"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  fatherOccupationRef.current &&
                  fatherOccupationRef.current.focus()
                }
              />
              {motherOccupationErr ? (
                <ErrorText errorText={motherOccupationErr} />
              ) : null}

              <Text style={styles.TextHeader}>{"Father's Occcupation"}</Text>
              <TextInput
                ref={fatherOccupationRef}
                value={fatherOccupation}
                onChangeText={setFatherOccupation}
                placeholder="Enter Father Occcupation"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  sisterRef.current && sisterRef.current.focus()
                }
              />
              {fatherOccupationErr ? (
                <ErrorText errorText={fatherOccupationErr} />
              ) : null}

              <Text style={styles.TextHeader}>{'Sister (s)'}</Text>
              <TextInput
                ref={sisterRef}
                value={sister}
                onChangeText={setSister}
                placeholder="Enter Sister (s)"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  brotherRef.current && brotherRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Brother (s)'}</Text>
              <TextInput
                ref={brotherRef}
                value={brother}
                onChangeText={setBrother}
                placeholder="Enter Brother (s)"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  gothraRef.current && gothraRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Gothra'}</Text>
              <TextInput
                ref={gothraRef}
                value={gothra}
                onChangeText={setGothra}
                placeholder="Enter Gothra"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  maternalGothraRef.current && maternalGothraRef.current.focus()
                }
              />
              {gothraErr ? <ErrorText errorText={gothraErr} /> : null}

              <Text style={styles.TextHeader}>{'Gothra (maternal)'}</Text>
              <TextInput
                ref={maternalGothraRef}
                value={maternalGothra}
                onChangeText={setMaternalGothra}
                placeholder="Enter Gothra (maternal)"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  familyTypeRef.current && familyTypeRef.current.focus()
                }
              />
              {maternalGothraErr ? (
                <ErrorText errorText={maternalGothraErr} />
              ) : null}

              <Text style={styles.TextHeader}>{'Family Type & Values'}</Text>
              <TextInput
                ref={familyTypeRef}
                value={familyType}
                onChangeText={setFamilyType}
                placeholder="Enter Family Type, Values"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  familyIncomeRef.current && familyIncomeRef.current.focus()
                }
              />
              {familyTypeErr ? <ErrorText errorText={familyTypeErr} /> : null}

              <Text style={styles.TextHeader}>{'Family Income'}</Text>
              <TextInput
                ref={familyIncomeRef}
                value={familyIncome}
                onChangeText={setFamilyIncome}
                placeholder="Enter Family Income"
                style={styles.TextInput}
                keyboardType={'number-pad'}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  locationRef.current && locationRef.current.focus()
                }
              />
              {familyIncomeErr ? (
                <ErrorText errorText={familyIncomeErr} />
              ) : null}

              <Text style={styles.TextHeader}>{'Location'}</Text>
              <TextInput
                ref={locationRef}
                value={location}
                onChangeText={setLocation}
                placeholder="Enter Location"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="done"
              />
              {locationErr ? <ErrorText errorText={locationErr} /> : null}

              <TouchableOpacity style={styles.NextBtn} onPress={stepFourDone}>
                <Text style={styles.NextBtnText}>{'NEXT'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : activeStep === 4 ? (
        <>
          <View style={{alignItems: 'center', marginTop: 5, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                letterSpacing: 0.3,
              }}>
              {'Lifestyle'}
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 10,
                marginBottom: 50,
                marginHorizontal: 30,
                padding: 20,
                paddingBottom: 80,
                borderRadius: 10,
                backgroundColor: '#FFF',
                elevation: 4,
              }}>
              <Text style={styles.TextHeader}>{'Habits'}</Text>
              <TextInput
                value={habits}
                onChangeText={setHabits}
                placeholder="Enter Habits"
                style={styles.TextInput}
                blurOnSubmit={false}
                returnKeyType="next"
                placeholderTextColor={'grey'}
                onSubmitEditing={() =>
                  assetsRef.current && assetsRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Assests'}</Text>
              <TextInput
                ref={assetsRef}
                value={assests}
                onChangeText={setAssets}
                placeholder="Enter Assests"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  languagesRef.current && languagesRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Languages Known'}</Text>
              <TextInput
                ref={languagesRef}
                value={languages}
                onChangeText={setLanguages}
                placeholder="Enter Languages Known"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  bloodGroupRef.current && bloodGroupRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Blood Group'}</Text>
              <TextInput
                ref={bloodGroupRef}
                value={bloodGroup}
                onChangeText={setBloodGroup}
                placeholder="Enter Blood Group"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  residentialStatusRef.current &&
                  residentialStatusRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Residential Status'}</Text>
              <TextInput
                ref={residentialStatusRef}
                value={residentialStatus}
                onChangeText={setResidentialStatus}
                placeholder="Enter Residential Status"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  specialCasesRef.current && specialCasesRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Special Cases'}</Text>
              <TextInput
                ref={specialCasesRef}
                value={specialCases}
                onChangeText={setSpecialCases}
                placeholder="Enter Special Cases"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="done"
              />

              <TouchableOpacity
                style={styles.NextBtn}
                onPress={() => setActiveStep(5)}>
                <Text style={styles.NextBtnText}>{'NEXT'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : activeStep === 5 ? (
        <>
          <View style={{alignItems: 'center', marginTop: 5, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                letterSpacing: 0.3,
              }}>
              {'Contact Details'}
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 10,
                marginBottom: 50,
                marginHorizontal: 30,
                padding: 20,
                paddingBottom: 80,
                borderRadius: 10,
                backgroundColor: '#FFF',
                elevation: 4,
              }}>
              <Text style={styles.TextHeader}>{'Alternate Email Id'}</Text>
              <TextInput
                ref={altEmailRef}
                value={altEmail}
                onChangeText={setAltEmail}
                placeholder="Enter Alternate Email Id"
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  mobileRef.current && mobileRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Mobile No.'}</Text>
              <TextInput
                ref={mobileRef}
                value={mobile}
                onChangeText={setMobile}
                placeholder="Enter Mobile No."
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                maxLength={10}
                keyboardType={'phone-pad'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  altMobileRef.current && altMobileRef.current.focus()
                }
              />
              {mobileErr ? <ErrorText errorText={mobileErr} /> : null}

              <Text style={styles.TextHeader}>{'Alternate No.'}</Text>
              <TextInput
                ref={altMobileRef}
                value={altMobile}
                onChangeText={setAltMobile}
                placeholder="Enter Alternate No."
                style={styles.TextInput}
                placeholderTextColor={'grey'}
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() =>
                  landlineRef.current && landlineRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Landline No.'}</Text>
              <TextInput
                ref={landlineRef}
                value={landline}
                onChangeText={setLandline}
                placeholder="Enter Landline No."
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  suitableTimeRef.current && suitableTimeRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Suitable time to call'}</Text>
              <TextInput
                ref={suitableTimeRef}
                value={suitabletime}
                onChangeText={setSuitableTime}
                placeholder="Enter Suitable time to call"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  contactAddRef.current && contactAddRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Contact Address'}</Text>
              <TextInput
                ref={contactAddRef}
                value={contactAddress}
                onChangeText={setContactAddress}
                placeholder="Enter Contact Address"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="next"
                onSubmitEditing={() =>
                  parentAddRef.current && parentAddRef.current.focus()
                }
              />

              <Text style={styles.TextHeader}>{'Parent Address'}</Text>
              <TextInput
                ref={parentAddRef}
                value={parentAddress}
                onChangeText={setParentAddress}
                placeholder="Enter Parent Address"
                style={styles.TextInput}
                blurOnSubmit={false}
                placeholderTextColor={'grey'}
                returnKeyType="done"
              />

              <TouchableOpacity
                style={styles.NextBtn}
                onPress={addUserDetails}
                // onPress={() => props.navigation.goBack()}
              >
                <Text style={styles.NextBtnText}>{'FINISH'}</Text>
              </TouchableOpacity>
            </View>

            {loading && <CustomLoader text="Loading..." />}
          </ScrollView>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  TextHeader: {
    color: '#000',
    fontSize: 14,
    marginTop: 20,
  },
  TextInput: {
    borderBottomColor: '#FFA07A',
    borderBottomWidth: 1,
    paddingVertical: 0,
    paddingTop: 3,
    paddingHorizontal: 5,
    color: 'black',
  },
  NextBtn: {
    height: 48,
    width: '50%',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#FFA07A',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    position: 'absolute',
    bottom: -24,
  },
  NextBtnText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 24,
  },
});
