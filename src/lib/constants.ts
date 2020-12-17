import { FormData } from '../context/types'

export const SITE_TITLE = 'Patient Enrollment'
export const terms =
  'Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.'
export const genders = ['Female', 'Male', 'Other']
export const maritalStatus = [
  'Married',
  'Single',
  'Divorced',
  'Life Partner',
  'Separated',
  'Widowed',
  'Other',
]
export const typeConditions = [
  'cardiovascular',
  'gastrointestinal',
  'psychological',
  'other',
]
export const formData: FormData = {
  demographics: {
    firstName: '',
    lastName: '',
    gender: '',
    birth: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    maritalStatus: '',
  },
  conditions: [
    {
      type: 'cardiovascular',
      condition: 'High blood pressure',
      isPositive: false,
    },
    {
      type: 'cardiovascular',
      condition: 'Cardiac Arrest',
      isPositive: false,
    },
    {
      type: 'cardiovascular',
      condition: 'Arrhythmia',
      isPositive: false,
    },
    {
      type: 'cardiovascular',
      condition: 'Coronary heart disease',
      isPositive: false,
    },
    {
      type: 'gastrointestinal',
      condition: 'IBS',
      isPositive: false,
    },
    {
      type: 'gastrointestinal',
      condition: "Crohn's Disease",
      isPositive: false,
    },
    {
      type: 'gastrointestinal',
      condition: 'Gallstones',
      isPositive: false,
    },

    {
      type: 'psychological',
      condition: 'Depression',
      isPositive: false,
    },
    {
      type: 'psychological',
      condition: 'Anxiety',
      isPositive: false,
    },
    {
      type: 'psychological',
      condition: 'Stress',
      isPositive: false,
    },
    {
      type: 'psychological',
      condition: 'Insomnia',
      isPositive: false,
    },
    {
      type: 'other',
      condition: 'Cancer',
      isPositive: false,
    },
    {
      type: 'other',
      condition: 'Diabetes',
      isPositive: false,
    },
  ],
  questionnaire: [
    {
      primary: 'Do you smoke any tobacco products?',
      answer: '',
      secondary: 'How much and how often?',
      value: '',
    },
    {
      primary: 'Do you drink alcohol?',
      answer: '',
      secondary: 'How much and how often?',
      value: '',
    },
    {
      primary: 'Have you regularly used illicit drugs?',
      answer: '',
      secondary: 'How much and how often?',
      value: '',
    },
    {
      primary: 'Current medications',
      answer: '',
      secondary:
        'Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.',
      value: [],
    },
    {
      primary: 'Medication allergies or reactions',
      answer: '',
      secondary: 'Please list any medication allergies or reactions',
      value: [],
    },
    {
      primary:
        'List any surgeries or hospital stays you have had and their approximate date / year',
      answer: '',
      secondary: 'Type of surgery or reason for hospitalization',
      value: [],
    },
  ],
}
