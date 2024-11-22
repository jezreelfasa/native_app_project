import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './nearbycard.styles'


const NearbyJobcard = ({ job, handleNavigate }) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo :
              "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <View style={styles.textContainer} >
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
      </View>
      <Text style={styles.jobType}>
        {job?.job_employment_type}
      </Text>
    </TouchableOpacity>
  )
}

export default NearbyJobcard
