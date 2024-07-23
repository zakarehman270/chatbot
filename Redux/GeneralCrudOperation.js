
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utilities/api";
import { toast } from "react-toastify";
const initialState = {
    FAQ: [
        {
            question: "What is insurance",
            answer:
                "Insurance is a financial arrangement that provides protection or coverage against potential financial losses or risks. In exchange for regular payments known as premiums, an insurance policyholder receives assurance that if a specified event occurs, the insurance company will compensate them or cover the financial losses. The events covered by insurance can vary widely and depend on the type of policy.",
        },
        {
            question: "What is Policyholder:",
            answer:
                "The individual or entity that purchases an insurance policy.",
        },
        {
            question: "Premium",
            answer:
                "The amount of money the policyholder pays to the insurance company at regular intervals, typically monthly or annually, to maintain coverage.",
        },
    ],
    GlossaryData: [
        {
            question: "Policy",
            answer:
                "A legal contract between the policyholder and the insurer, outlining the terms, conditions, and details of the insurance coverage.",
        },
        {
            question: "Coverage",
            answer:
                "The specific risks or events for which the insurance policy provides protection. This can include various types of risks, such as accidents, illnesses, property damage, or liability claims.",
        },
        {
            question: "Deductible",
            answer:
                "The amount the policyholder must pay out of pocket before the insurance coverage kicks in. Higher deductibles often result in lower premium payments.",
        },
    ],
    KnowledgeBaseData: [
        {
            "title": "Sample Title 1",
            "description": "Description for Sample Title 1",
            "Category": "Category 1",
            "Product": "Product 1",
            "Service": "Service 1"
        },
        {
            "title": "Sample Title 2",
            "description": "Description for Sample Title 2",
            "Category": "Category 2",
            "Product": "Product 2",
            "Service": "Service 2"
        },
        {
            "title": "Sample Title 3",
            "description": "Description for Sample Title 3",
            "Category": "Category 3",
            "Product": "Product 3",
            "Service": "Service 3"
        }
    ],

    PolicyDataAdmin: [
        {
            "id": "ABC123",
            "title": "Policy 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Category": "Category 1",
            "Product": "Product 1",
            "Service": "Service 1"
        },
        {
            "id": "ABC124",
            "title": "Policy 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Category": "Category 2",
            "Product": "Product 2",
            "Service": "Service 2"
        },
        {
            "id": "ABC126",
            "title": "Policy 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            "Category": "Category 3",
            "Product": "Product 3",
            "Service": "Service 3"
        },

        {
            "id": "ABC127",
            "title": "Policy 4",
            "description": "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Category": "Category 4",
            "Product": "Product 4",
            "Service": "Service 4"
        }
    ],
    policyData: [
        { title: "Title 1", details: "Long details for item 1..." },
        { title: "Title 2", details: "Even longer details for item 2..." },
        { title: "Title 3", details: "Extremely long details for item 3..." },
        // Add more objects as needed
    ],

    Transaction: [
        { keyReference: "120", serviceCategory: "cat1", customer: "Cate Blanchett", paymentType: "Online", chargeAmount: "120", invoice: "12000", status: "Paid" },
        { keyReference: "120", serviceCategory: "cat1", customer: "Cate Blanchett", paymentType: "Online", chargeAmount: "120", invoice: "12000", status: "Paid" },
        { keyReference: "120", serviceCategory: "cat1", customer: "Cate Blanchett", paymentType: "Online", chargeAmount: "120", invoice: "12000", status: "Paid" },
        { keyReference: "120", serviceCategory: "cat1", customer: "Cate Blanchett", paymentType: "Online", chargeAmount: "120", invoice: "12000", status: "Paid" },
        { keyReference: "120", serviceCategory: "cat1", customer: "Cate Blanchett", paymentType: "Online", chargeAmount: "120", invoice: "12000", status: "Paid" },
    ],


    staff: [
        {
            "name": "Marlon",
            "Last Name": "Brando",
            "Email":"Xxxx12@gmail.com",
            "Phone": "800-567-6626",
            "Permission": "Admin",
            "Category": "Artisan Contractors",
            "Role": "Admin",
            "Action":"1",
        },
        {
            "name": "Marlon",
            "Last Name": "Brando",
            "Email":"Xxxx12@gmail.com",
            "Phone": "800-567-6626",
            "Permission": "Admin",
            "Category": "Artisan Contractors",
            "Role": "Admin",
            "Action":"1",
        },
        {
            "name": "Marlon",
            "Last Name": "Brando",
            "Email":"Xxxx12@gmail.com",
            "Phone": "800-567-6626",
            "Permission": "Admin",
            "Category": "Artisan Contractors",
            "Role": "Admin",
            "Action":"2",
        },
        {
            "name": "Marlon",
            "Last Name": "Brando",
            "Email":"Xxxx12@gmail.com",
            "Phone": "800-567-6626",
            "Permission": "Admin",
            "Category": "Artisan Contractors",
            "Role": "Admin",
            "Action":"3",
        },

    ],
    LeadsData: [{
        Name: "Audrey Hepburn",
        Email: "AudreyHepburn12@gmail.com",
        Company: "XYZ",
        Phone: "12341234",
        Status: "Pending",
        LastUpdate: "16 hour ago",
        ["Send Message"]: "Send Message",
        ["Add Note"]: "Send Message",
    },
    {
        Name: "Audrey Hepburn",
        Email: "AudreyHepburn12@gmail.com",
        Company: "XYZ",
        Phone: "12341234",
        Status: "Complete",
        LastUpdate: "16 hour ago",
        ["Send Message"]: "Send Message",
        ["Add Note"]: "Send Message",
    },
    {
        Name: "Audrey Hepburn",
        Email: "AudreyHepburn12@gmail.com",
        Company: "XYZ",
        Phone: "12341234",
        Status: "Complete",
        LastUpdate: "16 hour ago",
        ["Send Message"]: "Send Message",
        ["Add Note"]: "Send Message",
    }
    ],
    companyData: [
        { name: "Ford Motor Company", address: "address1", phone: "844-357-3663", website: "https://www.jnj.com/", }
    ],

    departmentData: [
        { title: "Technical", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", },
        { title: "Management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", },
        { title: "Sales", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", }
    ],
    productTableData: [
        {
            img: "https://static.pakwheels.com/2016/07/car-insurance-e1469096802766.jpg",
            title: "General Liability Insurance",
            category: "Artisan Contractors",
            description:
                "General liability insurance doesn't cover employee injuries, auto accidents, punitive damages (in most states), workmanship, intentional acts or professional",
            State: "Alabamammm",
            id: "1",
        },
        {
            img: "https://reshield.com/wp-content/uploads/2019/11/246.jpg",
            title: "Worker's Compensation Insurance",
            category: "Artisan Contractors",
            description:
                "Workers' compensation coverage A protects employees and provides medical care, death, disability, and rehab for workers injured or killed on the job.",
            State: "Colorado",
            id: "2",
        },
        {
            img: "https://revenuesandprofits.com/wp-content/uploads/2022/12/Business-Insurance.jpg",
            title: "Commercial Auto Insurance",
            category: "Specialty Contractors ",
            description:
                "Commercial auto insurance helps cover the costs of auto accidents that occur while you or your staff uses company-owned cars for business",
            State: "Alaska",
            id: "3",
        },
        {
            img: "https://www.bankalfalah.com/wp-content/uploads/2020/11/azmat-health-horizontal.jpg",
            title: "License Bonds Insurance",
            category: "Specialty Contractors ",
            description:
                "A license and permit bond is one that is required by a municipality or other public body as a condition to granting a license or permit to engage in a ...",
            State: "Alaska",
            id: "4",
        },
    ],
    ServiceTableData: [
        {
            title: "Claim Processing",
            category: "Artisan Contractors",
            id: "1",
            relateds: "General Liability Insurance",
            price: "$224",
        },

        {
            title: "Document Retrieval Request",
            category: "Specialty Contractors",
            id: "1",
            relateds: "Commercial Auto Insurance",
            price: "$224",
        },

        {
            title: "Authorized Personnel",
            category: "Artisan Contractors",
            id: "1",
            relateds: "Worker's Compensation Insurance",
            price: "$224",
        },

    ],

    CustomerSatisfactionReview: [
        {
            user_ID: "#1321",
            customer_name: "Audrey Hepburn",
            customer_phone: "02156-5687",
            channel_name: "Website",
            rating: "4",
            customer_email: "audreyhepburn@gmail.com",
        },

        {
            user_ID: "#1322",
            customer_name: "Denzel Washington",
            customer_phone: "02156-5687",
            channel_name: "Email",
            rating: "3",
            customer_email: "denzelwashington@gmail.com",
        },

        {
            user_ID: "#1323",
            customer_name: "Meryl Streep",
            customer_phone: "02156-5687",
            channel_name: "Chat",
            rating: "5",
            customer_email: "merylstreep@gmail.com",
        },

        {
            user_ID: "#1324",
            customer_name: "Tom Hanks",
            customer_phone: "02156-5687",
            channel_name: "Phone",
            rating: "4",
            customer_email: "tomhanks@gmail.com",
        },

    ],

    Category: [
        { title: "Artisan Contractors", p_category: "Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { title: "Specialty Contractors", p_category: "Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { title: "Specialty Contractors", p_category: "Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { title: "Specialty Contractors", p_category: "Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { title: "Specialty Contractors", p_category: "Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ],

    tagsData: [
        { name: "Contractors", r_tags: "Artisan Contractors, Specialty Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Contractors", r_tags: "Artisan Contractors, Specialty Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Contractors", r_tags: "Artisan Contractors, Specialty Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Contractors", r_tags: "Artisan Contractors, Specialty Contractors", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ],
};
///  Create   ////
export const handlerCreate = createAsyncThunk(
    "general/create",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/create`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

const userReducer = createSlice({
    name: "person",
    initialState,
    reducers: {
        HandlerAddFAQ(state, action) {
            state.FAQ.push(action.payload);
        },
        HandlerAddGlossary(state, action) {
            state.GlossaryData.push(action.payload);
        },
        HandlerAddKnowledgeBase(state, action) {
            state.KnowledgeBaseData.push(action.payload);
        },
        HandlerAddPolicyData(state, action) {
            state.policyData.push(action.payload);
        },
        HandlerAddStaff(state, action) {
            state.staff.push(action.payload);
        },
        HandlerAddTransaction(state, action) {
            state.Transaction.push(action.payload);
        },
        HandlerAddCategory(state, action) {
            state.Category.push(action.payload);
        },
        HandlerAddLeadsData(state, action) {
            state.LeadsData.push(action.payload);
        },
        HandlerAddCompanyData(state, action) {
            state.companyData.push(action.payload);
        },
        HandlerAddProducts(state, action) {
            state.productTableData.push(action.payload);
        },
        HandlerAddServiceData(state, action) {
            state.ServiceTableData.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        /// Create //// 
        builder.addCase(handlerCreate.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerCreate.fulfilled, (state, action) => {
            state.successMessageCreate = action.payload;
            toast.success(`Successfully added ${action.payload?.table_name}`)
            state.loading = false;
        });
        builder.addCase(handlerCreate.rejected, (state, action) => {
            state.Auth = null;
            state.loading = false;
            state.errorMessage = action.payload;
        });

    },
});

export const { HandlerAddFAQ, HandlerAddGlossary, HandlerAddKnowledgeBase, HandlerAddPolicyData, HandlerAddStaff, HandlerAddTransaction, HandlerAddCategory, HandlerAddLeadsData, HandlerAddCompanyData, HandlerAddProducts, HandlerAddServiceData } = userReducer.actions;
export default userReducer.reducer;