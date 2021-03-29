import router from '../component_list.router'

// A function to test all the available routes for the component_list route
describe('component list routes', () => {
    test('has crud method', () => {
        const routes = [
            { path : '/', method : 'get'}, // Get all
            { path : '/', method : 'post'}, // Create one
            { path : '/:id', method : 'get'}, // Get one
            { path : '/:id', method : 'put'}, // Edit one
            { path : '/:id', method : 'delete'} //Delete one
        ]

        routes.forEach(route => {
            const match = router.stack.find(
                item => item.route.path === route.path && item.route.methods[route.method]
            )
            expect(match).toBeTruthy();
        })
    })
})