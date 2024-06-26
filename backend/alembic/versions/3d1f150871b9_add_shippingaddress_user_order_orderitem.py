"""add shippingAddress, user, order, orderItem

Revision ID: 3d1f150871b9
Revises: f9d6c308f715
Create Date: 2024-05-17 14:11:00.519810

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3d1f150871b9'
down_revision = 'f9d6c308f715'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('shipping_addresses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('address', sa.Text(), nullable=True),
    sa.Column('city', sa.Text(), nullable=True),
    sa.Column('date_added', sa.DateTime(), nullable=True),
    sa.Column('zipcode', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('email', sa.Text(), nullable=True),
    sa.Column('shipping_address_id', sa.Integer(), nullable=True),
    sa.Column('phone_number', sa.Text(), nullable=True),
    sa.Column('password', sa.Text(), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['shipping_address_id'], ['shipping_addresses.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('orders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('competed', sa.Boolean(), nullable=True),
    sa.Column('sended', sa.Boolean(), nullable=True),
    sa.Column('total_price', sa.Float(), nullable=True),
    sa.Column('order_time', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('order_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['order_id'], ['orders.id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('order_items')
    op.drop_table('orders')
    op.drop_table('users')
    op.drop_table('shipping_addresses')
    # ### end Alembic commands ###
