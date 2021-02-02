import {
    LOAD_COMPANIES_LOADING,
    LOAD_COMPANIES_SUCCESS,
    LOAD_COMPANIES_ERROR
} from './action-types'

export const addCom = (ndata) => {
    return {
        type: "CREATE_COMPANY",
        payload: {
          companyName: ndata.companyName,
          cPersonName: ndata.cPersonName,
          email: ndata.email,
          ifActive: ndata.ifActive,
          sdate: ndata.sdate,
          edate: ndata.edate,
          interest1: ndata.interest1,
          interest2: ndata.interest2,
          interest3: ndata.interest3,
        }
    }
}

export const deleteCom = (comList, index) => {
    return {
        type: "DELETE_COMPANY",
        payload: {
          companyName: comList[index].companyName,
        }
    }
}

export const updateCom = (ndata) => {
    return {
        type: "UPDATE_COMPANY",
        payload: {
            index: ndata.tableData.id,
            companyName: ndata.companyName,
            cPersonName: ndata.cPersonName,
            email: ndata.email,
            ifActive: ndata.ifActive,
            sdate: ndata.sdate,
            edate: ndata.edate,
            interest1: ndata.interest1,
            interest2: ndata.interest2,
            interest3: ndata.interest3,
        }
      }
}

// export const addComViaExcelFile

export function loadCompaniesLoading() {
    return {
        type: LOAD_COMPANIES_LOADING
    }
}

export function loadCompaniesSuccess(companies) {
    return {
        type: LOAD_COMPANIES_SUCCESS,
        companies
    }
}

export function loadCompaniesError(err) {
    return {
        type: LOAD_COMPANIES_ERROR,
        err
    }
}