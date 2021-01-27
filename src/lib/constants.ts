export const SITE_TITLE = 'Parsley Health'

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

export const conditions = [
  {
    type: 'cardiovascular',
    condition: 'High blood pressure',
    id: `cond-1`,
  },
  {
    type: 'cardiovascular',
    condition: 'Cardiac arrest',
    id: `cond-2`,
  },
  {
    type: 'cardiovascular',
    condition: 'Arrhythmia',
    id: `cond-3`,
  },
  {
    type: 'cardiovascular',
    condition: 'Coronary heart disease',
    id: `cond-4`,
  },
  {
    type: 'gastrointestinal',
    condition: 'IBS',
    id: `cond-5`,
  },
  {
    type: 'gastrointestinal',
    condition: "Crohn's disease",
    id: `cond-6`,
  },
  {
    type: 'gastrointestinal',
    condition: 'Gallstones',
    id: `cond-7`,
  },

  {
    type: 'psychological',
    condition: 'Depression',
    id: `cond-8`,
  },
  {
    type: 'psychological',
    condition: 'Anxiety',
    id: `cond-9`,
  },
  {
    type: 'psychological',
    condition: 'Stress',
    id: `cond-10`,
  },
  {
    type: 'psychological',
    condition: 'Insomnia',
    id: `cond-11`,
  },
  {
    type: 'other',
    condition: 'Cancer',
    id: `cond-12`,
  },
  {
    type: 'other',
    condition: 'Diabetes',
    id: `cond-13`,
  },
]

type IQuestionnaire = {
  [key: string]: string
}

export const questionnaireLabels: IQuestionnaire = {
  alcohol: 'Do you drink alcohol?',
  allergies: 'Medication allergies or reactions',
  tobacco: 'Do you smoke any tobacco products?',
  drugs: 'Have you regularly used illicit drugs?',
  medications: 'Current medications',
  surgeries:
    'List any surgeries or hospital stays you have had and their approximate date / year',
}
