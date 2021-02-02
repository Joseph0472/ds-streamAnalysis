import { loadCompaniesLoading, loadCompaniesSuccess, loadCompaniesError, loadEventsLoading, loadEventsSuccess, loadEventsError } from '../companyActions';
import companyApi from '../../../api/company';

export function loadCompanies() {
    return dispatch => {
        // First, dispatch the LOAD_Companies_LOADING action, allowing the rest of our app to detect when
        // we've started loading Companies.
        dispatch(loadCompaniesLoading());
        // Now, start loading the Companies.
        companyApi.getAllCompany()
            .then(
                // If the todos were loaded successfully, dispatch the LOAD_TODOS_SUCCESS action allowing the todos to be added to the store
                Companies => dispatch(loadCompaniesSuccess(Companies)),
                // If there was an error loading todos, dispatch the LOAD_TODOS_ERROR action providing details of the error
                error => dispatch(loadCompaniesError(error.message || "Unexpected error!")));
    }
}