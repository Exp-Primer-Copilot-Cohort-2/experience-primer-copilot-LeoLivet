function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JS', 'React', 'Node'],
        // Method
        getSkills: function() {
            return this.skills;
        }
    };
    return member;
}