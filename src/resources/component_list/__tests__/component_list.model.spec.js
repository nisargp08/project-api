import { ComponentList } from '../component_list.model'
import mongoose from 'mongoose';

// Test function to test model schema for component list model
describe('ComponentList Model', () => {
    describe('schema', () => {
        test('subtype', () => {
            const subtype = ComponentList.schema.obj.subtype;
            expect(subtype).toEqual({
                type : String,
                required : true
            });
        });

        test('title', () => {
            const title = ComponentList.schema.obj.title;
            expect(title).toEqual({
                type : String,
                required : true,
            });
        });

        test('image', () => {
            const image = ComponentList.schema.obj.image;
            expect(image).toEqual({
                type : String,
                required : true,
            });
        })

        test('description', () => {
            const description = ComponentList.schema.obj.description;
            expect(description).toEqual({
                type : String,
                required : true,
            });
        });

        test('linkedTo', () => {
            const linkedTo = ComponentList.schema.obj.linkedTo;
            expect(linkedTo).toEqual({
                type : String,
                required : true,
            })
        })
    });
});
