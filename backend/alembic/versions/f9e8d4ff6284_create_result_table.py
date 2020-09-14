"""create result table

Revision ID: f9e8d4ff6284
Revises: 
Create Date: 2020-08-30 02:48:31.426987

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f9e8d4ff6284'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'results',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('search', sa.String(), nullable=False),
        sa.Column('search_type', sa.String(), nullable=False),
        sa.Column('result', sa.JSON, nullable=False),
    )


def downgrade():
    op.drop_table('results')
