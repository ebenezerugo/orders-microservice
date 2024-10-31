
// Get the list of all method name and controller name
// This will be used to generate the kind of action that is being performed

export const RouteNaming = {
    PermissionsController: {
        getPermissions: 'Get a paginated permission list',
        getPermissionById: 'Get permission by id',
        createPermission: 'Create new permission',
        updatePermission: 'Update permission by id',
    },
    RolesController: {
        getRoles: 'Get a paginated role list',
        getRoleById: 'Get role by id',
        createRole: 'Create new role',
        updateRole: 'Update role by id',
        deleteRole: 'Delete role by id',
    },
    UsersController: {
        getUsers: 'Get a paginated user list',
        getUserById: 'Get user by id',
        createUser: 'Create new user',
        updateUser: 'Update user by id',
        changePassword: 'Change user password',
    },
    CustomersController: {
        getCustomers: 'Get a paginated customer list',
        getCustomerById: 'Get customer by id',
        createCustomer: 'Create new customer',
        updateCustomer: 'Update customer by id',
        changePassword: 'Change customer password',
    },
    InvoiceController: {
        getInvoices: 'Get a paginated invoice list',
        getInvoiceStatistics: 'Get invoice statistics for admin',
        getInvoiceForProperty: 'Get invoice for a property with status PURCHASE_REQUEST',
        getInvoiceById: 'Get invoice by id',
        createInvoiceAndGeneratePayment: 'Create new invoice and payment',
        createInvoiceOnly: 'Create new invoice only',
        selectPaymentOption: 'Select payment option',
        updateInvoice: 'Update invoice by id',
        deleteInvoice: 'Delete invoice by id',
    },
    PaymentsController: {
        create: 'Create new payment',
        findAll: 'Get a paginated payment list',
        findAllForCustomerProperty: 'Get a paginated payment list for a customer property',
        findAllPayments: 'Get a paginated payment list',
        getPaymentsAsCsv: 'Get payments as csv',
        getPaymentsAsPdf: 'Get payments as pdf',
        findOne: 'Get payment by id',
    },
    RequestForPaymentController: {
        create: 'Create new request for payment',
        findAll: 'Get a paginated request for payment list',
        findOne: 'Get request for payment by id',
        update: 'Update request for payment by id',
        remove: 'Delete request for payment by id',
    },
    RevenueHeadsController: {
        getRevenueHeads: 'Get a paginated list of revenue heads',
        getRevenueHeadById: 'Get revenue head by id',
        createRevenueHead: 'Create new revenue head',
        updateRevenueHead: 'Update revenue head by id',
        removeRevenueHead: 'Delete revenue head by id',
        uploadFile: 'Upload revenue head file',
    },
    CountriesController: {
        findAll: 'Get a paginated country list',
    },
    LgasController: {
        findAll: 'Get a paginated LGA list',
    },
    StatesController: {
        findAll: 'Get a paginated state list',
    },
    OpenPropertyPaymentController: {
        findAllRevenueHead: 'Get a paginated list of revenue heads',
        findProperty: 'Get a paginated list of properties',
        saveCustomerProperty: 'Save customer property',
        confirmPayment: 'Confirm payment',
    },
    CategoriesController: {
        getCategories: 'Get a paginated category list',
        getCategoryById: 'Get category by id',
        createCategory: 'Create new category',
        updateCategory: 'Update category by id',
        removeCategory: 'Delete category by id',
    },
    EstatesController: {
        getEstates: 'Get a paginated estate list',
        getEstateById: 'Get estate by id',
        createEstate: 'Create new estate',
        updateEstate: 'Update estate by id',
        removeEstate: 'Delete estate by id',
    },
    PropertiesController: {
        findOne: 'Get property by id',
        save: 'Save property',
        findAll: 'Get a paginated property list',
        findAllCustomerProperties: 'Get a paginated list of customer properties',
        findAllCustomerPropertiesByCustomerId: 'Get a paginated list of customer properties by customer id',
        statistics: 'Get property statistics',
        adminStatistics: 'Get property statistics for admin',
        findById: 'Get property by id',
        update: 'Update property by id',
    },
    StatusesController: {
        getStatuses: 'Get a paginated status list',
        getStatusById: 'Get status by id',
        createStatus: 'Create new status',
        updateStatus: 'Update status by id',
        removeStatus: 'Delete status by id',
    },
    ApplicationsController: {
        create: 'Create new application to purchase property',
        houseTypes: 'Get a paginated list of house types',
    },
    FilesController: {
        upload: 'Upload file',
        download: 'Download file',
    },
    WebhookController: {
        workflow: 'Initiate workflow through webhook',
        workflowForPropertyPurchase: 'Initiate workflow for property purchase through webhook',
        paymentsCallback: 'Payments callback',
    },
    TasksController: {
        create: 'Create new task',
        findAll: 'Get a paginated task list',
        getStatistics: 'Get task statistics',
        findOne: 'Get task by id',
        approve: 'Approve task',
        reject: 'Reject task',
    },
    AppController: {
        getHello: 'Get hello',
    },
    HealthController: {
        check: 'Check health',
    },
}
