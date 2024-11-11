import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    address: {
        street: {
            type: String,
            trim: true
        },
        suite: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        zipcode: {
            type: String,
            trim: true
        },
        geo: {
            lat: {
                type: String,
                trim: true
            },
            lng: {
                type: String,
                trim: true
            }
        }
    },
    phone: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    company: {
        name: {
            type: String,
            trim: true
        },
        catchPhrase: {
            type: String,
            trim: true
        },
        bs: {
            type: String,
            trim: true
        }
    }
}, 
{
    timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
