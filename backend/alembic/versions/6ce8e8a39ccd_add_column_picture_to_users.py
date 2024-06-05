"""add column picture to user

Revision ID: 6ce8e8a39ccd
Revises: c1af1084e4d6
Create Date: 2024-06-05 13:41:49.719695

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6ce8e8a39ccd'
down_revision = 'c1af1084e4d6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('picture', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'picture')
    # ### end Alembic commands ###