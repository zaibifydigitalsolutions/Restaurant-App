# FoodHub - Restaurant Ordering App

A modern, responsive restaurant ordering web application built with React, featuring a premium UI design with menu browsing, shopping cart, checkout process, and admin panel.

## Features

### Customer Experience
- **Menu Browsing**: Browse menu items by categories with beautiful card layouts
- **Shopping Cart**: Add/remove items, update quantities with real-time price calculations
- **Checkout Process**: Complete checkout with delivery/pickup options and payment form
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Local Storage**: Cart persists across browser sessions

### Admin Panel
- **Dashboard**: Overview of orders, revenue, and menu statistics
- **Menu Management**: Add, edit, and remove menu items
- **Order Management**: View and manage customer orders
- **Search & Filter**: Quick search and category filtering for menu items

### UI/UX Features
- **Premium Design**: Modern gradient effects, smooth animations, and micro-interactions
- **Mobile Friendly**: Optimized for mobile devices with touch-friendly interfaces
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Fast loading and smooth interactions

## Technology Stack

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library
- **CSS3** - Styling with custom CSS and animations
- **LocalStorage API** - Cart persistence

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd restaurant-ordering-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
|-- components/
|   |-- Navbar.jsx       # Navigation with cart indicator
|   |-- Menu.jsx          # Menu browsing with categories
|   |-- Cart.jsx          # Shopping cart management
|   |-- Checkout.jsx      # Checkout process
|   |-- Admin.jsx         # Admin dashboard
|-- context/
|   |-- CartContext.jsx   # Cart state management
|-- App.jsx               # Main app component with routing
|-- App.css               # Global styles and utilities
|-- main.jsx              # App entry point
```

## Usage

### For Customers
1. Browse the menu on the homepage
2. Filter by categories or search for specific items
3. Add items to your cart
4. Review your cart and adjust quantities
5. Proceed to checkout
6. Fill in delivery/pickup information
7. Complete payment and place order

### For Admin
1. Navigate to `/admin` 
2. View dashboard statistics
3. Switch between "Menu Management" and "Orders" tabs
4. Manage menu items (add/edit/delete)
5. Monitor and update order statuses

## Features in Detail

### Menu System
- Category-based organization
- Item search functionality
- Popular items highlighting
- Ratings and preparation time display
- High-quality food images

### Cart Functionality
- Real-time quantity updates
- Automatic price calculations
- Item removal with confirmation
- Cart persistence across sessions
- Item count badge in navigation

### Checkout Process
- Delivery and pickup options
- Form validation
- Order summary with tax calculation
- Payment information collection
- Order confirmation

### Admin Dashboard
- Real-time statistics
- Order management
- Menu item CRUD operations
- Search and filter capabilities
- Responsive data tables

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Touch-friendly interfaces
- Adaptive layouts
- Optimized navigation
- Proper viewport handling

## Future Enhancements

- [ ] Real-time order tracking
- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Order history
- [ ] Reviews and ratings system
- [ ] Email notifications
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Built with React and modern web technologies for the best restaurant ordering experience.**
