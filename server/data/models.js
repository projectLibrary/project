const { Sequelize, DataTypes } = require('sequelize');
// Importing Sequelize for creating DB and tables


// Create instance of sequalize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Experion@123',
    database: 'library'
});

// Define user model
const Users = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: true
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    address: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
    },

    otp: {
        type: DataTypes.INTEGER,
        allowNull: true,

    },

    status: {
        type: DataTypes.STRING,
        allowNull: true
    },

    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'user'
    }

});


//define Categories
const Categories = sequelize.define('Categorie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

});

//define Authors
const Authors = sequelize.define('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: true
    },

});

//define books
const Books = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bookname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    summary: {
        type: DataTypes.STRING(400),
        allowNull: false,

    },
    availability: {
        type: DataTypes.ENUM('Available', 'Not available'),
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Authors,
            key: 'id'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Categories,
            key: 'id'
        }
    }

});

//define issued book details
const Issuedbooks = sequelize.define('Issuedbooks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userCategory: {
        type: DataTypes.ENUM('self', 'friends', 'family'),
        allowNull: false
    },
    issuedDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    expectedreturnDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    returnDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    bookId: {
        type: DataTypes.INTEGER,
        references: {
            model: Books,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },


});

//define Latefee
const Latefee = sequelize.define('Latefee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    issuedId: {
        type: DataTypes.INTEGER,
        references: {
            model: Issuedbooks,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    delayDays: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fee: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    isPayed: {
        type: DataTypes.STRING,
        allowNull: true
    }


});

const Feedback = sequelize.define('Feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    feedback: {
        type: DataTypes.STRING(400),
        allowNull: true
    }
});



//foreign key references for Book
Authors.hasMany(Books, {
    sourceKey: 'id',
    foreignKey: 'authorId'
});

Books.belongsTo(Authors, {
    targetKey: 'id',
    foreignKey: "authorId",
    constraints: true,
    onDelete: 'CASCADE'
});

Categories.hasMany(Books, {
    sourceKey: 'id',
    foreignKey: 'categoryId'
});

Books.belongsTo(Categories, {
    targetKey: 'id',
    foreignKey: 'categoryId',
    constraints: true,
    onDelete: 'CASCADE'
});


//foreignkey reference for Issuedbooks
Books.hasOne(Issuedbooks, {
    sourceKey: 'id',
    foreignKey: 'bookId'
});

Issuedbooks.belongsTo(Books, {
    targetKey: 'id',
    foreignKey: 'bookId',
    constraints: true,
    onDelete: 'CASCADE'
});

Users.hasMany(Issuedbooks, {
    sourceKey: 'id',
    foreignKey: 'userId'
});

Issuedbooks.belongsTo(Users, {
    targetKey: 'id',
    foreignKey: 'userId',
    constraints: true,
    onDelete: 'CASCADE'
});

//foreignkey reference for Latetfee
Users.hasMany(Latefee, {
    sourceKey: 'id',
    foreignKey: 'userId'
});

Latefee.belongsTo(Users, {
    targetKey: 'id',
    foreignKey: 'userId',
    constraints: true,
    onDelete: 'CASCADE'
});


Issuedbooks.hasOne(Latefee, {
    sourceKey: 'id',
    foreignKey: 'issuedId'
});

Latefee.belongsTo(Issuedbooks, {
    targetKey: 'id',
    foreignKey: 'issuedId',
    constraints: true,
    onDelete: 'CASCADE'
});

//foreignkey reference for feedback
Users.hasOne(Feedback, {
    sourceKey: 'id',
    foreignKey: 'userId'
});

Feedback.belongsTo(Users, {
    targetKey: 'id',
    foreignKey: 'userId',
    constraints: true,
    onDelete: 'CASCADE'
});



module.exports.Users = Users;
module.exports.Categories = Categories;
module.exports.Authors = Authors;
module.exports.Books = Books;
module.exports.Issuedbooks = Issuedbooks;
module.exports.Latefee = Latefee;
module.exports.Feedback = Feedback;
