# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Result, type: :model do
  describe 'Attributes' do
    it { should respond_to :name }
    it { should respond_to :result_type }
  end

  describe 'Validations' do
    context 'with any status' do
      it { should validate_presence_of :name }
      it { should validate_presence_of :result_type }
    end
  end

  describe 'Other Definitions' do
    it { should define_enum_for(:result_type).with_values(%i[artist album]) }
  end
end
