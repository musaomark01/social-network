const {Thought, User} = require('../models');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find({})
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.id})
            .select('-__v')
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'})
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
            const user = await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts: thought._id}},
                {new: true}
            )
            if (!user) {
                return res.status(404).json({message: 'No user found with this id!'})
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {new: true, runValidators: true}
            );
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'})
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.id})
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'})
            }
            await User.findOneAndUpdate(
                {thoughts: req.params.thoughtId},
                {$pull: {thoughts: req.params.thoughtId}},
                {new: true}
            )
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {new: true, runValidators: true}
            )
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'})
                
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new: true}
            )
            if (!thought) {
                return res.status(404).json({message: 'No thought found with this id!'})
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
};