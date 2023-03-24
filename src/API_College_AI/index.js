import axios from "axios";

export let API_College_AI;

export function init_API_College_AI(id, type) {
    let apiOptions;
    if (type === "info") {

    
    apiOptions = {
        baseURL: "https://api.collegeai.com/v1/api/college/info",
        params: {
            api_key: '0c08b0e6a7a1cf9e539e330ca7',
            college_unit_ids: `${id}`,
            info_ids: [
        'acceptance_rate', 'act_cumulative_midpoint', 'act_cumulative_percentile25',
    'act_cumulative_percentile75', 'admissions_website', 
'application_website', 'average_aid_awarded_high_income', 'average_aid_awarded_lower_middle_income',
'average_aid_awarded_low_income', 'average_aid_awarded_middle_income', 
'average_aid_awarded_upper_middle_income', 'average_financial_aid', 
 'avg_cost_of_attendance',
'avg_net_price', 'campus_image', 'city', 'class_size_range10_to19',
'class_size_range20_to29', 'class_size_range2_to9', 'class_size_range30_to39',
'class_size_range40_to49', 'class_size_range50_to99', 
'class_size_range_over100', 
  

'enrolled_men', 'enrolled_women', 'financial_aid_website', 'four_year_graduation_rate',
'fraternities_percent_participation', 'freshmen_live_on_campus', 
 
'in_state_tuition', 'is_private', 'logo_image', 'long_description', 
'median_earnings_six_yrs_after_entry', 'median_earnings_ten_yrs_after_entry',
'men_varsity_sports', 'net_price_by_income_level0_to3000', 
'net_price_by_income_level110001_plus', 'net_price_by_income_level30001_to48000',
'net_price_by_income_level48001_to75000', 'net_price_by_income_level75001_to110000',
'number_of_full_time_faculty', 'number_of_part_time_faculty', 'out_of_state_tuition',
'percent_first_generation', 'percent_of_students_who_receive_financial_aid',
'percent_undergrads_awarded_aid', 'rankings_best_college_athletics', 
'rankings_best_college_academics', 'rankings_best_college_campuses',
'rankings_best_college_food','rankings_best_college_professors', 
'rankings_best_colleges', 'rankings_best_colleges_for_art',
'rankings_best_colleges_for_biology', 'rankings_best_colleges_for_business',
'rankings_best_colleges_for_chemistry', 'rankings_best_colleges_for_communications',
'rankings_best_colleges_for_computer_science', 'rankings_best_colleges_for_design',
'rankings_best_colleges_for_economics', 'rankings_best_colleges_for_engineering',
'rankings_best_colleges_for_history', 'rankings_best_colleges_for_nursing',
'rankings_best_colleges_for_physics', 'rankings_best_greek_life_colleges',
'rankings_best_student_life', 'rankings_best_value_colleges', 
'rankings_hardest_to_get_in', 'region', 
'sat_average', 'sat_composite_midpoint', 'sat_composite_percentile25',
'sat_composite_percentile75', 'similar_colleges', 'sororities_percent_participation',
'student_avg_family_income', 'student_faculty_ratio', 
'total_applicants', 'total_enrolled', 'typical10_year_earnings',
'typical6_year_earnings', 'typical_room_and_board', 'typical_misc_expenses', 'short_description'
]
        },
        timeout: 30000,
        mode: 'cors'
    };

} else if (type === "list") {
    apiOptions = {
        baseURL: "https://api.collegeai.com/v1/api/college-list",
        params: {
            api_key: '0c08b0e6a7a1cf9e539e330ca7',
            info_ids: ['short_description']
        },
        timeout: 30000,
        mode: 'cors'
    };
}

    API_College_AI = axios.create(apiOptions);
};