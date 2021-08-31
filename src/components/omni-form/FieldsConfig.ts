import {
    LBL_COUNTRY_OF_WORK,
    LBL_DATE_OF_BIRTH,
    LBL_FIRST_NAME,
    LBL_HOLIDAY_ALLOWANCE,
    LBL_LAST_NAME, LBL_MARTIAL_STATUS,
    LBL_NR_OF_CHILDREN,
    LBL_SOCIAL_INSURANCE_NR,
    LBL_WORKING_HOURS
} from "../../Constants";

export interface FormConfig {
    countryOfWork: FieldConfig,
    dob: FieldConfig,
    firstName: FieldConfig,
    lastName: FieldConfig,
    holidayAllowance: FieldConfig,

    martialStatus?: FieldConfig, // SP, GH
    socialInsuranceNr?: FieldConfig, // SP
    nrOfChildren?: FieldConfig, // GH
    workingHours?: FieldConfig, // BZ
}

export interface FieldConfig {
    label: string,
    type: 'text' | 'number' | 'checkbox' | 'date',
    validation?: {
        min?: number,
        max?: number,
    }
}

export const BASE_FIELDS = {
    countryOfWork: {
        label: LBL_COUNTRY_OF_WORK,
        type: 'text',
    },
    firstName: {
        label: LBL_FIRST_NAME,
        type: 'text',
    },
    lastName: {
        label: LBL_LAST_NAME,
        type: 'text',
    },
    dob: {
        label: LBL_DATE_OF_BIRTH,
        type: 'date',
    },
    holidayAllowance: {
        label: LBL_HOLIDAY_ALLOWANCE,
        type: 'number',
    },

}

export const LOCATION_BASED_FIELDS: { [key: string]: any }  = {
    Spain: {
        martialStatus: {
            label: LBL_MARTIAL_STATUS,
            type: 'checkbox',
        },
        socialInsuranceNr: {
            label: LBL_SOCIAL_INSURANCE_NR,
            type: 'text',
        },
        holidayAllowance: {
            validation: {
                min: 30
            }
        },
    },
    Ghana: {
        martialStatus: {
            label: LBL_MARTIAL_STATUS,
            type: 'checkbox',
        },
        nrOfChildren: {
            label: LBL_NR_OF_CHILDREN,
            type: 'number',
        },
    },
    Brazil: {
        workingHours: {
            label: LBL_WORKING_HOURS,
        },
        holidayAllowance: {
            validation: {
                max: 40
            }
        },
    }
}
