var request = require('supertest');
var expect = require('expect');
var {toDo} = require('./../models/todolist');
var {app} = require('./../server');

beforeEach((done) => {
    toDo.remove({}).then(() => done());
});

describe('POST /todos', () => {
    it('should send data', (done) => {
        var text = 'any text';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err, res) => {
                if (err) {
                    return done('tyt', err)
                };
                toDo.find().then((todos) => {
                    expect(todos.length).toBe(1)
                    console.log(todos.length)
                    // expect(todos[0].text).tobe(text);
                     done();
                }).catch((e) => done(e));
            });
    });

    it('should not create any data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err) {
                return done(err)
            };
        toDo.find().then((todos) => {
            expect(todos.length).toBe(0)
            done();
        }).catch((e)=> done(e));
        });
    });
});