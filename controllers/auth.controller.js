import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hasedPassword,
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error creating user' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid Credentials!' });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: 'Invalid Credentials!' });

    res.status(200).json({ message: 'User Logged In' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to login!' });
  }
};

export const logout = async (req, res) => {
  res.status(200).json({ message: 'Logout Successful' });
};
